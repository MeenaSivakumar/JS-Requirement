package org.mentorbridge.service;

import org.mentorbridge.dto.EmployeeDTO;
import org.mentorbridge.entity.EmployeeEntity;
import org.mentorbridge.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class EmployeeService {
  @Autowired
  private EmployeeRepository employeeRepository;


    public EmployeeDTO addEmployee(EmployeeDTO employeeDto){
        EmployeeEntity employeeEntity = EmployeeEntity.builder().firstName(employeeDto.getFirstName()).lastName(employeeDto.getLastName()).email(employeeDto.getEmail()).phoneNo(employeeDto.getPhoneNo()).build();
        EmployeeEntity employeeEntity1 =   employeeRepository.save(employeeEntity);
         return EmployeeDTO.builder().empId(employeeEntity1.getEmpId()).build();

    }
}
