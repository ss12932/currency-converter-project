**Project Setup**

Hey guys, heres a small guide on the ticketing system for our project and also creating feature branches. Mostly noted down from Suraj's weather dashboard session, if you have the time watch the first 30 mins of Suraj's advanced workshop, he explains and shows really well how to use the ticketing system and creating feature branches.

**Tickets**

Before we write any code, we have to go to the project tab on github and add tickets for different tasks in order to delegate tasks between our project members. We can add checklist of tasks and more information etc.

Once we pick up a ticket, we convert it to an issue and tick off the checklist of tasks, drag to IN PROGRESS and close the issue once completed and it will automatically move to the DONE section.

**Feature Branch**

If you haven't done already, please clone our project repo onto your local machines. Navigate to your coding-bootcamp directory and copy this command:

`git clone git@github.com:ss12932/hotel-currency-project.git`

once cloned, navigate to root of project folder in your command terminal

`cd hotel-currency-project`

and create a feature branch which branches off the main branch, so any time you pick up a ticket from github you create a feature branch using this command:

`git checkout -b <name-of-branch>`

We dont want everyone writing code and directly pushing to the main branch, we want to go through a review process between whole team before merging to main branch. make sure to use kebab case so dash instead of spaces when naming your feature branch.

This will create a branch on your local machine not remote. so github remote repository dont know about this feature branch. so we have to do this command:

`git push -u origin <name-of-branch>`

This will upstream push to origin remote.

make sure to do these 2 steps BEFORE writing any code!

```
git checkout -b <name-of-branch>
git push -u origin <name-of-branch>
```

Also check on github if a new branch created and whenever you push code, go back to branch and make sure to check if you pushed.

Whenever you push code to your feature branch, the feature branch you created will be ahead of main branch by a number of commits.

Github will ask if you would like to do pull request, select yes and put title of pull request to the same as feature branch name.

You can see how many commits on the feature branch you made and how many files changes, code changes etc. it will give the whole team full visibility of the whole process and what you've written.

NEVER MERGE pull requests. we have to go through a approval process. Also on the right panel, we can assign the pull request to a project, and also the ticket or issue that you have picked.
Once pull request is closed, ticket will be automatically done.

Then click on ready for review button, copy link from URL bar in project channels and inform anybody on slack. also make sure to assign reviewers.

Make sure to change main branch then do a git pull because main is still behind need to pull all the changes so all files and folders visible.

```
git checkout main
git pull
```

Also here are some other useful git commands:

delete feature branch on local machine once done with task:

`git branch -D <name-of-branch>`

check what branch you're on:

`git status`

Sorry for the wall of text everyone!

Sinh
