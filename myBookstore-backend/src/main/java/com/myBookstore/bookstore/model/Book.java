package com.myBookstore.bookstore.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Book {
    @JsonProperty("id")
    private Integer id;
    @JsonProperty("alt")
    private String alt;
    @JsonProperty("title")
    private String title;
    @JsonProperty("price")
    private String price;
    @JsonProperty("image")
    private String image;
    @JsonProperty("author")
    private String author;
    @JsonProperty("unitPrice")
    private Integer unitPrice;
    @JsonProperty("description")
    private String description;

    public Book() {}

    public Book(Integer id, String title, String price, String image, String alt, String author, Integer unitPrice, String description) {
        this.id = id;
        this.alt = alt;
        this.title = title;
        this.price = price;
        this.image = image;
        this.author = author;
        this.unitPrice = unitPrice;
        this.description = description;
    }
    
    public Integer getId() {
        return this.id;
    }

    public String getAlt() {
        return alt;
    }

    public String getTitle() {
        return title;
    }

    public String getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    public String getAuthor() {
        return author;
    }

    public Integer getUnitPrice() {
        return unitPrice;
    }

    public String getDescription() {
        return description;
    }
    
}