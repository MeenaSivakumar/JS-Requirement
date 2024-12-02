package org.mentorbridge.entity;

import io.micrometer.observation.GlobalObservationConvention;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name ="EMPLOYEE")
@Builder
@AllArgsConstructor
@Data
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long empId;
    String firstName;
    String lastName;
    String email;
    String phoneNo;
    String roll;
public EmployeeEntity(){

}

}
