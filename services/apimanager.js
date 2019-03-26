import React, { Component } from "react";
import apiconfig from "../config/Api";


export default{
    async getHolidayList(token)  {
        try {
            const res = await fetch(apiconfig.Base_url + apiconfig.HolidayListApi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':token
            },
         });
           return await res.json();
        } catch(e) {
         console.log(e)
       }
    },
    async login(email,password)  {
        try {
            const res = await fetch(apiconfig.Base_url + apiconfig.LoginApi, {
                method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      }, 
                      body: JSON.stringify({
                          "email":email,
                          "password":password
                        })
         });
           return await res.json();
        } catch(e) {
         console.log(e)
       }
    }
}