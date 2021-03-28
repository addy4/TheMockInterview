# project-scheduler-interview
This is the backend code for scheduling interviews. The cadidates for the interview can be added using the postman app. Database with the name 'emp' is created and all candidates are inserted into a table having the name 'participants' . Scheduling will be done on the basis of time and date input provided by the users. This spring application is a MAVEN based application where PostgreSQL is used for the database. 

Dependencies listed in pom.xml : 
1. JDBC
2. JPA 
3. Hibernate
4. PostgreSQL

Run Command - 

mvn spring-boot:run

API for Get Request with tag parameter (tag = Topic of Interest)
http://localhost:8080/api/v1/interviewstag?tag=Algorithms

API for Get Request with tag parameters (tag = Topic of Interest AND time = Time Date 1 of Slot)
http://localhost:8080/api/v1/interviewstag?tag=Algorithms&time=June 4 11:00 PM - 12:15 PM
