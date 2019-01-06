DETAILS :
=====================================================
Pirple Email Id : nit.trisha@gmail.com
Course : NodeJS
Assignment : 1
=====================================================

Topic : 
Create a simple "Hello World" API. Meaning:
1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format.
 
======================================================
About the application :

The application contains the following folder structure :

Assignment1 - The main folder
	Assignment1-API - Contains the application
		https - Contains the key.pem and cert.pem
		lib - Contains the internal dependencies
			config.js - contains the configuration of the staging and production environment
			handlers.js - contains the handlers definitions of the application
			utils.js - contains the helper functions of the application
		index.js - the main file to start the application
	README - Contains the description of the application
========================================================
README :

Details of the assignment : 
The program accepts any POST request with route - hello ,and sends back a response in JSON format.It can accept QueryStringParamter "name" , this is not mandatory parameter. If the paremeter is present in the requested URL we can see the name in the respone message sent .

Steps to Run the Node program :

1. The program support both http and https.
2. All the configurations are present in one file, config.js.
   The file will be present in <INSTALL_PATH>/Assignment1/Assignment1-API/lib/config.js
3. The configuration file will have 2 sections staging,production. 
    Go to the <INSTALL_PATH>/Assignment1/Assignment1-API directory.
	Run the program from your terminal using the below command.
	node index.js
	By default the staging environment data will be read.If you want to use the production configuration
	you can use the below command to run the program.
	NODE_ENV=production node index.js
4. Once the application starts you can see in which port they are running in the logs.
5. To use the https support , please generate new key.pem and cert.pem and place the same in the 
   <INSTALL_PATH>/Assignment1/Assignment1-API/https directory.
6. Example to send request :
   staging environment
   HTTP : http://www.localhost:3000/hello
   HTTPS : https://www.localhost:3001/hello
   production environment
   HTTP : http://www.localhost:5000/hello
   HTTPS : https://www.localhost:5001/hello
   
   Available route : /hello
   Once you send the post request using the above url , you will be getting the response in JSON.
7. The application also support the Query string parameter name.
   
   Example to use the query string parameter name in the application
   staging environment
   HTTP : http://www.localhost:3000/hello?name=pirple
   HTTPS : https://www.localhost:3001/hello?name=pirple
   production environment
   HTTP : http://www.localhost:5000/hello?name=pirple
   HTTPS : https://www.localhost:5001/hello?name=pirple
   
   Please note the parameter is not mandatory. If the parameter is found the response message will contains the 
   name in the JSON.
   
