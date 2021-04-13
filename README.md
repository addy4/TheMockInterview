# project-scheduler-interview
This is the 'Mock Interview Scheduler Web App'

Backend - SpringBoot
Front End - ReactJS

The cadidates for the interview can be added using the postman app. Database with the name 'emp' is created and all candidates are inserted into a table having the name 'participants' . Scheduling will be done on the basis of time and date input provided by the users. This springBoot+ReactJS application is a MAVEN based application where PostgreSQL is used for the database. 

Requirements : 
1. Apache Maven
2. Node Package Manager (npm) 

Dependencies listed in pom.xml : 
1. JDBC
2. JPA 
3. Hibernate
4. PostgreSQL

Run Command - 

Backend Server -> mvn spring-boot:run
Front End -> npm start

API for Get Request with tag parameter (tag = Topic of Interest)

http://localhost:8080/api/v1/interviewstag?tag=Algorithms

API for Get Request with tag parameters (tag = Topic of Interest AND time = Time Date 1 of Slot)

http://localhost:8080/api/v1/interviewstag?tag=Algorithms&time=June 4 11:00 PM - 12:15 PM

![Screenshot 2021-04-12 at 12 46 00 AM](https://user-images.githubusercontent.com/42651751/114591175-3d7ce980-9ca7-11eb-94cf-5745b14548f4.png)

![Screenshot 2021-04-13 at 6 56 13 PM](https://user-images.githubusercontent.com/42651751/114591252-55546d80-9ca7-11eb-8c77-21a8dc7ebdb0.png)
