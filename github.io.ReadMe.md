# Deploying Static Pages

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Step 1 - Build Angular Project](#step-1-build-angular-project)
- [Step 2 - Deploy Static Pages](#step-2-deploy-static-pages)
- [Step 3 - Navigate to the Webpage](#step-3-navigate-to-the-webpage)

<!-- /code_chunk_output -->

## Step 1 - Build Angular Project

ng build --prod --base-href 'https://webia1.github.io/regex.github.io/'

## Step 2 - Deploy Static Pages

cd dist/regex
git init
git add .
git commit -m "INITIAL COMMIT"
git remote add origin https://github.com/webia1/regex.github.io.git
git branch -M master
git push -u origin master

## Step 3 - Navigate to the Webpage

<https://webia1.github.io/regex.github.io/>
