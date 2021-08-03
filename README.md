#### :man_technologist: This project made by  [@yonatan555](https://github.com/yonatan555) [@meirozenfeld](https://github.com/meirozenfeld) [@ozmoyal](https://github.com/ozmoyal)

# Welcome to our Big-data-cloud project!
In this project we designed a system that gets a stream of data stores and process it in typical architectures templates and uses common big data infrastructure for analyze in rapid and adaptive manner.





### Goal
The goal of this project is to design a dashboard analitic system in big data perception which uses NoSQL Databases, tools from Hadoop Ecosystem and microservices in typical architecture and implementing infrastructure challenges.

## Functional requirements

 - the system will allow managing toll road sections. the road have 5 sections 
 - In any moment the number of cars in any section is shown
 - there is a fluent stream of cars which is entering and exiting the road - a simulator will create these events and will result updates
 - any event will include data: event type(entering/exiting road), section, car type(van, private, truck), day, hour and special day
 - the system use a dashboard to show current number of cars on the road and allow to ask list of detail about the cars
 - the system builds a prediction model based on decision tree: with the given details - enter section, car type, day and hour. the system allows to predict the exit section
 - there is a confusion matrix which show if the prediction model is accurate and updat with every car that enter the road



## Non-Functional requirements
 - simulator will produce massages about cars that captured driving in a particular section
 - the system is designed in micro-services approach
 - the general design pattern is based on lambda architecture
 - the code in the server systems is MVC based
 - the base for the application and the view is Node.js and suitable extention (Express.js etc.)
 - the system is using 2 NoSQL based databases: Redis and MongoDB - the first will save updated Ad hoc data that available for rapid queries and the second for processed and long-term data
 - the system is using distributed event streaming platform Kafka from Hadoop family (https://www.cloudkarafka.com/)
 - for the predication model we used BigML.com

 
 <br></br>
 ### project architecture
 ![127867905-de2e4fe7-0dcb-4d45-92e8-a20a942ab508](https://user-images.githubusercontent.com/57761478/127868793-88ffa9d7-fed7-4d66-a2d3-8f5d50f836f4.png)

<br></br>
### <pre>                                        Examples                          </pre>
![car simulation 1](https://user-images.githubusercontent.com/57761478/127979252-10d8e251-9f3e-48af-a6bd-b0400f255509.jpg)


![car simulation 2](https://user-images.githubusercontent.com/57761478/127979294-0de669ce-b485-46b1-ab7d-52ea62d73f7f.jpg)


