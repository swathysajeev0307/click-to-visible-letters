/*  COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const h = document.getElementById("h");
const e = document.getElementById("e");
const L = document.getElementById("L");
const l = document.getElementById("l");
const o = document.getElementById("o");
const hello = document.getElementById("complete");

h.addEventListener("click", ()=>{
    h.style.display = "none";
    e.style.display = "block";
});

e.addEventListener("click", ()=>{
    e.style.display = "none";
    L.style.display = "block";
});

L.addEventListener("click", ()=>{
    L.style.display = "none";
    l.style.display = "block";
});

l.addEventListener("click", ()=>{
    l.style.display = "none";
    o.style.display = "block";
});

o.addEventListener("click", ()=>{
    o.style.display = "none";
    hello.style.display = "block";
});

hello.addEventListener("click", ()=>{
    hello.style.display = "none";
    h.style.display = "block";
});