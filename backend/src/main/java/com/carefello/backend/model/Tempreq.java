package com.carefello.backend.model;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tempreq")

public class Tempreq {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int elderid;
    private int bed_id;
    private Date assStartDate;
    private Date assEndDate;
    private char gender;
    private String allergyMeal;
    private String currentMedication;
    private List<String> foodNot;

    public Tempreq(int elderid, int bed_id, Date assStartDate, Date assEndDate, char gender, String allergyMeal, String currentMedication, List<String> foodNot){
        this.elderid = elderid;
        this.bed_id = bed_id;
        this.assStartDate = assStartDate;
        this.assEndDate = assEndDate;
        this.gender = gender;
        this.allergyMeal = allergyMeal;
        this.currentMedication = currentMedication;
        this.foodNot = foodNot;
    }

    public Tempreq(){
        
    }

}

