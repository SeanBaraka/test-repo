<script setup lang="ts">
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const { data, pending } = useFetch('/api/prices', { key: Math.random().toString()}) 
const priceData = ref({});

const { public: { BASE_URL }} = useRuntimeConfig();

pdfMake.fonts = {
  Anonymous: {
    normal: `${BASE_URL}/font/Anonymous_Pro.ttf`,
    bold: `${BASE_URL}/font/Anonymous_Pro_B.ttf`,
    bolditalics: `${BASE_URL}/font/Anonymous_Pro_BI.ttf`,
    italics: `${BASE_URL}/font/Anonymous_Pro_I.ttf`
  },
}

const printThese = () => {
  var val = htmlToPdfmake(`
      <div class="header-section" style="text-align: center">
        <h2>Tap Lounge</h2>
        <p>P.O. BOX 3305-90100, Machakos</p>
        <p>Tel: 07234xxx05</p>
        <p>P0512343234K</p>
      </div>
      <div class="body-section">
        <table style="width: 100%;border:none">
          <tr>
            <th>Item</th>
            <th style="width: 15%">Quantity</th>
            <th style="width: 15%">@</th>
            <th style="width: 15%">Amount</th>
          </tr>
          <tr>
            <td>Pick N Peel 2lts</td>
            <td>1</td>
            <td>220</td>
            <td>220</td>
          </tr>
          <tr>
            <td>Pringles Sizzlin</td>
            <td>1</td>
            <td>458</td>
            <td>458</td>
          </tr>
          <tr>
            <td>Bic White board Maker</td>
            <td>2</td>
            <td>65</td>
            <td>130</td>
          </tr>
          <tr>
            <td>Aqua Mist 500ml</td>
            <td>1</td>
            <td>35</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Bio Yoghurt 500ml</td>
            <td>1</td>
            <td>300</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Chicken Capon 1.2Kg</td>
            <td>1</td>
            <td>578</td>
            <td>578.00</td>
          </tr>
        </table>
      </div>
    `, { tableAutoSize: true });
  var dd = {content:val, defaultStyle: {
    font: 'Anonymous',
  }};

  pdfMake.createPdf(dd, { tableLayouts:  { defaultBorder: false }}).print();
}

</script>

<template>
  <section class="flex flex-col"> 
    <button @click="printThese">Print some stuff</button>
    
  </section>

</template>
