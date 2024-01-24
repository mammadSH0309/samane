import { Table } from 'antd';
import React from 'react'

function TableDataOstan({data}) {

 const dataSource = [
    {
        "id": 113,
        "name": "جمعیت",
        "location": "تهران",
        "ostan": "۱۴,۱۳۴,۰۰۰",
        "keshvar": "۸۴,۹۷۱,۰۰۰",
        "vahed": "نفر",
        "english_name_location": "tehran"
    },
    {
        "id": 114,
        "name": "سواد",
        "location": "تهران",
        "ostan": "۹۲.۹%",
        "keshvar": "۸۷.۶%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 115,
        "name": "مشارکت در انتخابات",
        "location": "تهران",
        "ostan": "۲۶.۲۴%",
        "keshvar": "۴۲.۵۷%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 116,
        "name": "سهم از اقتصاد",
        "location": "تهران",
        "ostan": "۲۱.۶۷%",
        "keshvar": "۱۰۰%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 117,
        "name": "سرانه بودجه استانی",
        "location": "تهران",
        "ostan": "۲۰۷,۰۲۹",
        "keshvar": "۶۵۱,۱۰۵",
        "vahed": "تومان به ازای هر نفر",
        "english_name_location": "tehran"
    },
    {
        "id": 118,
        "name": "درآمد خانوار",
        "location": "تهران",
        "ostan": "۶,۷۷۶,۴۱۷",
        "keshvar": "۴,۵۰۸,۳۹۲",
        "vahed": "تومان",
        "english_name_location": "tehran"
    },
    {
        "id": 119,
        "name": "تورم",
        "location": "تهران",
        "ostan": "۳۶.۷%",
        "keshvar": "۳۶.۴%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 120,
        "name": "بیکاری",
        "location": "تهران",
        "ostan": "۷.۲%",
        "keshvar": "۹.۶%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 121,
        "name": "فلاکت",
        "location": "تهران",
        "ostan": "۴۳.۹",
        "keshvar": "۴۶",
        "vahed": "شاخص",
        "english_name_location": "tehran"
    },
    {
        "id": 122,
        "name": "فقر مطلق",
        "location": "تهران",
        "ostan": "۱۵.۶%",
        "keshvar": "۱۶.۷%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 123,
        "name": "اجاره‌نشینی",
        "location": "تهران",
        "ostan": "۴۳.۶%",
        "keshvar": "۳۶.۷%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 124,
        "name": "بیمارستان",
        "location": "تهران",
        "ostan": "۲۱۵.۱",
        "keshvar": "۱۶۴.۱",
        "vahed": "به ازای ۱۰۰ هزار نفر",
        "english_name_location": "tehran"
    },
    {
        "id": 125,
        "name": "خشکسالی",
        "location": "تهران",
        "ostan": "۶۵.۱%",
        "keshvar": "۸۲.۵%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 126,
        "name": "طلاق",
        "location": "تهران",
        "ostan": "۴۴.۴%",
        "keshvar": "۲۸.۷%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 127,
        "name": "ازدواج زیر ۱۵ سال",
        "location": "تهران",
        "ostan": "۱.۴%",
        "keshvar": "۵.۳%",
        "vahed": "درصد",
        "english_name_location": "tehran"
    },
    {
        "id": 128,
        "name": "جرایم مواد مخدر",
        "location": "تهران",
        "ostan": "۷۴۱.۲",
        "keshvar": "۵۰۲.۵",
        "vahed": "به ازای ۱۰۰ هزار نفر",
        "english_name_location": "tehran"
    }
 ]
console.log(data)
 const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'استان',
      dataIndex: 'ostan',
      key: 'ostan',
    },
    {
      title: 'کشور',
      dataIndex: 'keshvar',
      key: 'keshvar',
    },
    {
        title: 'واحد',
        dataIndex: 'vahed',
        key: 'vahed',
      },
  ];

  return (
        <Table bordered style={{borderColor : 'black'}} pagination={false} size='small' dataSource={data} columns={columns} />
  )
}

export default TableDataOstan