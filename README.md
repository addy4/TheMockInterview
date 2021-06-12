# project-scheduler-interview
**Mock Interview Scheduler Web App**

- Backend : SpringBoot
- Front End : ReactJS
- Database : PostgreSQL
- Java build automation : Maven
 
<p align="justify">
Candidates (Name, Email-IDs) and scheduled interviews (date/time, topic) get listed as seperate tables on the UI. Scheduling is done on the basis of time and date input provided by the users.  
</p>

- Entries made by user : Candidate Name, Email-ID, Interview topic, Start-time, End-time

Requirements : 
1. Apache Maven
2. Node Package Manager (npm) 

Dependencies listed in pom.xml : 
1. JDBC
2. JPA 
3. Hibernate
4. PostgreSQL

- Run Commands : 
  - Backend Server : mvn spring-boot:run
  - Front End : npm start

API for getting 'matched' interview for parameters(s) : tag ONLY (tag = Topic of Interest)  

http://localhost:8080/api/v1/interviewstag?tag=Algorithms

API for getting 'matched' interview for parameters(s) : tag AND date-time (tag = Topic of Interest AND time = Start-Time of Slot)

http://localhost:8080/api/v1/interviewstag?tag=Algorithms&time=June 4 11:00 PM - 12:15 PM

![Screenshot 2021-04-12 at 12 46 00 AM](https://user-images.githubusercontent.com/42651751/114591175-3d7ce980-9ca7-11eb-94cf-5745b14548f4.png)

![Screenshot 2021-04-13 at 6 56 13 PM](https://user-images.githubusercontent.com/42651751/114591252-55546d80-9ca7-11eb-8c77-21a8dc7ebdb0.png)
