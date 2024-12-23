# example-percy-selenium-javascript

Example app showing integration of [Percy](https://percy.io/) visual testing into Selenium JavaScript tests.

Based on the [TodoMVC](https://github.com/tastejs/todomvc) [VanillaJS](https://github.com/tastejs/todomvc/tree/master/examples/vanillajs)
app, forked at commit [4e301c7014093505dcf6678c8f97a5e8dee2d250](https://github.com/tastejs/todomvc/tree/4e301c7014093505dcf6678c8f97a5e8dee2d250).

## Selenium JavaScript Tutorial

The tutorial assumes you're already familiar with JavaScript and
[Selenium JavaScript](https://www.selenium.dev/selenium/docs/api/javascript/index.html) and focuses on using it with Percy. You'll still
be able to follow along if you're not familiar with Selenium JavaScript, but we won't spend time introducing Selenium JavaScript concepts.

The tutorial also assumes you have [Node 12+ with npm](https://nodejs.org/en/download/) and
[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.

### Step 1

Clone the example application and install dependencies:

```bash
$ git clone git@github.com:percy/example-percy-selenium-javascript.git
$ cd example-percy-selenium-javascript
$ npm install
```

The example app and its tests will now be ready to go. You can explore the app
by opening the
[`index.html`](https://github.com/percy/example-percy-selenium-javascript/blob/master/index.html)
file in a browser.

### Step 2

Sign in to Percy and create a new project. You can name the project "todo" if you'd like. After
you've created the project, you'll be shown a token environment variable.

### Step 3

In the shell window you're working in, export the token environment variable:

**Unix**

``` shell
$ export PERCY_TOKEN="<your token here>"
```

**Windows**

``` shell
$ set PERCY_TOKEN="<your token here>"

# PowerShell
$ $Env:PERCY_TOKEN="<your token here>"
```

Note: Usually this would only be set up in your CI environment, but to keep things simple we'll
configure it in your shell so that Percy is enabled in your local environment.

### Step 4

Check out a new branch for your work in this tutorial (we'll call this branch
`tutorial-example`), then run tests & take snapshots:

``` shell
$ git checkout -b tutorial-example
$ npm run test
```

This will run the app's Selenium JavaScript tests, which contain calls to create Percy snapshots. The snapshots
will then be uploaded to Percy for comparison. Percy will use the Percy token you used in **Step 2**
to know which organization and project to upload the snapshots to.

You can view the screenshots in Percy now if you want, but there will be no visual comparisons
yet. You'll see that Percy shows you that these snapshots come from your `tutorial-example` branch.

### Finished! 😀

From here, you can try making your own changes to the app and tests, if you like. If you do, re-run
the tests  and you'll see any visual changes reflected in Percy.
