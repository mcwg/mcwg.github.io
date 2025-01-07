# Setup
MacOS comes with `git` built in, so there is not much to do here if you want to use the command line! 

If you want to use the Github Desktop app (a graphical interface to use git), then download it from [here](https://desktop.github.com). After installing open and use the option `sign in using your browser` (see instructions [here](https://docs.github.com/en/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/authenticating-to-github)).

## Checking out repositories (git cloning)
To checkout a repository, go to the repository github site (e.g. [https://github.com/mcwg/SINGLE](https://github.com/mcwg/SINGLE)) and click the green `code` button. 

*  If using the command line interface, copy the https link (e.g. `https://github.com/mcwg/SINGLE.git`) and run from your `calc` folder:
``` shell
$ git clone https://github.com/mcwg/SINGLE.git
```
*  If using github desktop, click on the `open with Github Desktop` (shows up after pressing the green `code` button) and when the app opens, make sure you select as local path your `calc` folder. More details (with pictures) [here](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop)

## Using Security Tokens
(only needed for command line interface)

*  Go to [https://github.com/settings/tokens](https://github.com/settings/tokens).

*  Click `Generate a personal access token ` or `Generate New Token`.

*  Click the first box `repo` and name it something.  Then `Generate Token` at the bottom. Then in the Terminal
``` shell
$ git pull
```
*  put in your github username.
*  copy and past the generated personal access token as your password. 

For more details, see 
http://gmacario.github.io/2017/08/08/cmdline-git-with-github-2fa.html

# Very Basic Workflow

## Making changes and committing them: pull, add, commit and push (like svn up, add, ci)

### With the Gigthub Desktop app
*  [Making changes locally and letting git know about them](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)(Git Committing)
*  [Pushing to the cloud (remote)](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)

### With the command line
In the terminal, cd to the directory in the repository where your want to make changes or add files.

*  `$ git pull` will update all files in the repository.
*  Make your edits or new files.
*  `$ git add filename.tex` will add filename.tex. Add as many files as you want.  **Note:** this *does not send your changes to the remote repository*.
*  `$ git commit -m "fixed the explanation"` will make a commit with the "fixed the explanation" description for all the files you have added (no need to add your name or date to the message). **Note:** this *does not send your changes to the repository*.
*  `$ git push` will send your commits to the remote repository.

You can type `$ git status` after any of these steps to see where git is at.

## Creating a branch

You can see the tree structure of the repository on the network page. For example, the tree for SINGLE is at [https://github.com/mcwg/SINGLE/network](https://github.com/mcwg/SINGLE/network).
   
Each node is a separate commit (and you can click on them to see the delta).

### Creating a branch using github desktop
*  [Creating a local branch](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#creating-a-branch)
*  [Sending your branch to the cloud (publish branch)](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#publishing-a-branch)
*  [Switching between branches locally](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#publishing-a-branch) (switching branches will silently change all the versions of the files in your computer to the versions of that branch).

### Creating a branch using the command line
Here is how to create branch clalled `edc-test` :
``` shell
$ git checkout master                      # make sure you're on master (you probably already are)

$ git pull origin                          # this updates your local copy

$ git checkout -b edc-test                 # this creates a new branch on your own computer

$ echo "a new file" > new-file.txt         # make a new file

$ git status                               # you can see that git knows about it

$ git add new-file.txt                     # add the file to version control

$ git status                               # notice the status has changed

$ git commit -m "adding a new file"        # commit it to version control

$ git status                               # notice the status has changed

$ git push origin edc-test:edc-test        # push the new branch up to github, giving it the same name
```

If you mimic these steps with your own branch you'll see it up on the network graph. 

Then you can do your work on that branch without affecting master until you're ready. 

When you're ready, you can create a **Pull Request** which indicates Elliot that you want to merge your edits to the master branch (you are requesting Elliot to *Pull* your changes into the master. 



# Git FAQ

## I got an email saying `Basic authentication using a password to Git is deprecated and will soon no longer work`

See [Using Security Tokens](https://mcwg.github.io/git/#using-security-tokens) above.

## I get an error `xcrun: error: invalid active developer path, missing xcrun`
Run in the terminal
```shell
xcode-select --install
```
See this [link](https://www.studytonight.com/post/solved-mac-os-xcrun-error-invalid-active-developer-path-missing-xcrun) for more details.

## What to do if git refuses a push

### Using the Github Desktop app
The app will mostly guide you through the process. 

*  If there are new commits in the cloud that you had not updated, the app will just instruct you to `fetch` those. If there are no serious conflicts, then the app will silently take care of everything. See more details [here](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github).

*  If new commits in the cloud are causing a merge conflict that is harder to resolve, then the app will give you the option to abort your push. Feel free to abort and ask for help.

### Using the command line
Git will refuse a push when someone pushed changes after your last pull. It is not hard to fix this as long as you know how to deal with the `vi` editor which git will open for you without asking, and which feels like an unresponsive screen for someone who has not used it. Here is how to go about it:

Example:
``` shell
$ git add file.tex
$ git commit -m "fixing a decimal approximation"
[master 1227b27] fixing a decimal approximation
 1 file changed, 65 insertions(+)
$ git push
To https://github.com/mcwg/SINGLE
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/mcwg/SINGLE'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
As git suggests, you should `$ git pull` and everything will be fine, but in the process of pulling you will end up in an apparently "unresponsive screen" in the terminal (the vi editor). 

Process:
*  Run `$ git pull`
*  When it goes into the "unresponsive merge screen" (vi editor): type `:q` followed by \<enter\> (`:` goes into command mode in vi, then `q` stands for "quit").
*  Git will attempt to merge and tell you if the merge was successful (very very often, contact someone if it does not manage to do the merge).
*  Don't forget then to `$ git push` since the merge happened in your computer, and has not been pushed to the repository (no need to re-run the commit command with the message).

See, for example, this [link](https://unix.stackexchange.com/questions/181280/how-to-exit-a-git-merge-asking-for-commit-message)

## recovering the repository version of a file (git checkout)
If git says it cannot pull because it will overwrite some local edits and you are ok tossing your edits away, then run
```
$ git checkout filename
```
which will give you the current version of the repository.

# Git Tips

## File history in github
https://github.com/mcwg/SINGLE/commits/master/CHAP1/1-3e32.tex
will give the history of CALC/SINGLE/CHAP1/1-3e32.tex 
BUT ... this only works of you are logged into your github account in your browser.


## git show to see the changes in a commit
Commits are referenced by hashes (not revision numbers). When you push, git will say something like:
```
5b591bda6..850b94a7d  master -> master
```
This says that old "revision number" was 5b591bda6  and the new one is 850b94a7d.

If you type
```
git show 850b94a7d
```
the you will see the diff between those commits.

## Looking at changes between two dates
Use
``` shell
$ git log --after="2018-06-30" --before="2018-07-03" --oneline
```

