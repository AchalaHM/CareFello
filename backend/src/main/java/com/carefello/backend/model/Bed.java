package com.carefello.backend.model;

import java.sql.Date;
import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name="bed1")
public class Bed {

    @Id
    @Column(name="bed_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bed_id;
    @Column(name="free", length = 1)
    private int free;
    @Column(name="assigned", length = 1)
    private int assigned;
    @Column(name="occupied", length = 1)
    private int occupied;
    @Column(name="assStartDate")
    private Date assStartDate;
    @Column(name="assEndDate")
    private Date assEndDate;
    @Column(name="occuStartDate")
    private Date occuStartDate;
    @Column(name="occuEndDate")
    private Date occuEndDate;
    @Column(name="occuelderid", length = 45)
    private int occuElderId;
    @Column(name="asselderid", length = 45)
    private int assElderId;
    @Column(name="caregiverid", length = 45)
    private int caregiverId;
    

    public Bed() {

    }

    public Bed(int free, int assigned, int occupied, Date assStarDate,
    Date assEndDate, Date occuStarDate, Date occuEnDate, int occuElderId,
    int assElderId){

        this.free = free;
        this.assigned = assigned;
        this.occupied = occupied;
        this.assStartDate = assStarDate;
        this.assEndDate = assEndDate;
        this.occuStartDate = occuStarDate;
        this.occuEndDate = occuEnDate;
        this.occuElderId = occuElderId;
        this.assElderId = assElderId;
        
    }
    
}
