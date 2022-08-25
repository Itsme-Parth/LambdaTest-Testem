
# LambdaTest-Testem-sample

A guide to run Testem with LambdaTest

### Prerequisites
- [Download](https://code.visualstudio.com/download) Visual Studio code (IDE) for writing code script
- Install Node using the ```$ install node``` command
- Follow the command below to install **Testem**
 ```
  $ npm install testem -g
 ```

### Steps to run the test

#### Step 1. Clone the LambdaTest-Testem-Integration Github repository

```
git clone https://github.com/LambdaTest/LambdaTest-Testem-sample.git
cd LambdaTest-Testem-sample
```

#### Step 2. Set LambdaTest Username and Access Key in environment variables.
 
For Linux/macOS:
```
$ export LT_USERNAME="YOUR_USERNAME"
$ export LT_ACCESS_KEY="YOUR ACCESS KEY"
```
For Windows:
```
$ set LT_USERNAME="YOUR_USERNAME"
$ set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

#### Step 3. Install Dependencies.
```
npm i
```
#### Step 4. Configure LambdaTest Tunnel 
- Open [Automation Build](https://automation.lambdatest.com/build) page on the LambdaTest dashboard
- Download and add the _binary file_ in the same folder with the code 
- Copy the Configure Tunnel command from the top right corner of the dashboard
- Run the command in your terminal 
### Running the Test
We have added different launchers with different configurations
#### Command to run your test on Chrome
```
testem -l LambdaTest
```
#### Command to run your test on Firefox
```
testem -l LambdaTest-firefox
```
#### Command to run your test on Safari
```
testem -l LambdaTest-safari
```
