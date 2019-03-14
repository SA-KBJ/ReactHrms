import React, { Component } from "react";
import apiconfig from "../config/Api";


export default{
    async getHolidayList()  {
        try {
            const res = await fetch(apiconfig.Base_url + apiconfig.HolidayListApi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
         });
           return await res.json();
        } catch(e) {
         console.log(e)
       }
    }
}