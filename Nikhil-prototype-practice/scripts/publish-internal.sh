#!/usr/bin/env bash
set -euo pipefail

team_number="${1:-}"
if [[ ! "$team_number" =~ ^[1-9][0-9]*$ ]]; then
  echo 'Supply the verified team number: bash scripts/publish-internal.sh NUMBER' >&2
  exit 1
fi

org='GH-x-SPC-Project'
repo="team${team_number}-prototype"
cd "$(dirname "$0")/.."
command -v gh >/dev/null || { echo 'Install the official GitHub CLI first.' >&2; exit 1; }
gh auth status >/dev/null 2>&1 || { echo 'Sign in to the intended GitHub account before publishing.' >&2; exit 1; }
membership="$(gh api "user/memberships/orgs/$org" --jq '.state')"
[[ "$membership" == 'active' ]] || { echo 'Active membership in the requested organization is required.' >&2; exit 1; }
git rev-parse --verify main >/dev/null || { echo 'Commit the reviewed source on main first.' >&2; exit 1; }
if git remote get-url origin >/dev/null 2>&1; then
  echo 'An origin remote already exists. Verify it manually; this script will not replace or push it.' >&2
  exit 1
fi
if gh api "repos/$org/$repo" >/dev/null 2>&1; then
  echo 'The requested repository already exists. Review its visibility, ownership, and contents manually before pushing.' >&2
  exit 1
fi
echo "Requesting the exact Internal repository $org/$repo. No visibility fallback is allowed."
visibility="$(gh api --method POST "orgs/$org/repos" -f name="$repo" -f visibility=internal -F auto_init=false --jq '.visibility')"
[[ "$visibility" == 'internal' ]] || { echo 'The API did not confirm Internal visibility. No source was pushed.' >&2; exit 1; }
url="$(gh api "repos/$org/$repo" --jq '.clone_url')"
verified_visibility="$(gh api "repos/$org/$repo" --jq '.visibility')"
[[ "$verified_visibility" == 'internal' ]] || { echo 'Visibility verification failed. No source was pushed.' >&2; exit 1; }
git remote add origin "$url"
git push -u origin main
gh repo view "$org/$repo" --json url,visibility
echo 'Clone this verified Internal repository into a new folder and repeat the README checks.'
