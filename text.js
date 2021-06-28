
// // const data=[ {
// //     "Date": "2020-04-29",
// //     "Phone": 9455622241,
// //     "Name": "Shankara Narasimhan",
// //     "Amount": 260
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9597628723,
// //     "Name": "Sulya Gupta",
// //     "Amount": 90
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9640338121,
// //     "Name": "Brahma Swamy",
// //     "Amount": 80
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9383568793,
// //     "Name": "Vaibhav Mulye",
// //     "Amount": 240
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9455622241,
// //     "Name": "Shankara Narasimhan",
// //     "Amount": 230
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9521737322,
// //     "Name": "Riddhi Nair",
// //     "Amount": 70
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9389644210,
// //     "Name": "Brahma Swamy",
// //     "Amount": 80
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9603660688,
// //     "Name": "Dhenuka Dhawan",
// //     "Amount": 250
// // },
// // {
// //     "Date": "2020-04-29",
// //     "Phone": 9451926724,
// //     "Name": "Sahan Sibal",
// //     "Amount": 260
// // },
// // ]
// // let number=20
// // function createObject(data){
// //     let data1=[]
// //     let sum=0
// //     for(let key in data){
// //          if(key<=4){
// //              data1.push({'orders':key,'customer':data[key]})
// //          }
// //          else if(key>=5){
// //              sum+=data[key]
// //              }
// //       }
// //     data1.push({'orders':'5','customer':sum})
// //     console.log(data1)
// // }
// // console.log(createObject({ 1: 11, 2: 9, 3: 10, 4: 8, 5: 5, 6: 1, 7: 2, 24: 1 }))



// /*
// 1)create an Object  
// 2) obejct must contain 
//     {order:1,customerCount:15},
//     {order:2,customerCount:10},
//     {order:3,customerCount:1},

// */

























// // function OrdersPieChart(props){
// //     const { ordersPerCusomters } = props

// //     const final_data = Object.entries(ordersPerCusomters)
// //     final_data.unshift(['order','customer']) 

// //     google.charts.load('current', {'packages':['corechart']});
// //     google.charts.setOnLoadCallback(drawChart);
        
// //     // Draw the chart and set the chart values
// //     function drawChart() {
// //         var data= google.visualization.arrayToDataTable(final_data)

// //     // Optional; add a title and set the width and height of the chart
// //       var options = {'title':'My Average Day', 'width':500, 'height':400};

// //     // Display the chart inside the <div> element with id="piechart"
// //         var chart = new google.visualization.PieChart(document.getElementById('piechart'));
// //         chart.draw(data);
// //     }

// //     return (
// //         <div id="piechart" style={{width: '500px',float: 'right'}}></div>
// //     )
// // }



// let graphData=[
//       {orders: "1",customer:11},
//       {orders:'2',customer:9},
//       {orders:'3',customer:10},
//       {orders:'4',customer:8},
//       {orders:'5',customer:9}
// ]
// const data=graphData.map((ele)=>{
//     return {[ele.orders]:ele.customer}
// })
// let newObject=Object.assign({},...data)
// let final_result=Object.entries(newObject)
// final_result.unshift(['orders','customer'])
// console.log(final_result)


// //console.log(Object.entries(data))