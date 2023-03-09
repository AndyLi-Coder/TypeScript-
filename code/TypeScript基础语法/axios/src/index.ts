
import axios from 'axios';
import React from 'react';

import _ from 'loadsh'

import type { AxiosHeaders, AxiosInstance } from 'axios';

import { num } from './utils/math'
import AppVue from './vue/App.vue';

import CurryImage from './images/wallhaven-pk2qjp.png'
const message: string = 'hello world'


console.log(message);
console.log(num(10, 20))



// lib.dom.d.ts

const h2El = document.createElement('h2')
h2El.textContent = 'Hello TypeScript'
document.body.append(h2El)


console.log(_.join(['abc', 'cba', 'nba']))


console.log(names, age, height)

const p = new Person('why', 18)
console.log(p.name, p.age)


const imgEl = document.createElement('img')
imgEl.src = CurryImage
document.body.append(imgEl)




$.ajax({
  url: 'http://codercba.com:8000/home/multidata',
  success: function (res: any) {
    console.log(res)
  }
})