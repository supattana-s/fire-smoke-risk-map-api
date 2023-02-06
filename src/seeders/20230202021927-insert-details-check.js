"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert("details_checklists", [
            {
                details:
                    "สายไฟเสียหาย (เห็นสายไฟอ่อน / เส้นลวดทองแดง / สายไฟละลาย / มีความร้อน / สีเปลี่ยนจากเดิม ) ฉนวนของสายไฟฟ้าต้องไม่มีการแตกกรอบ ไม่มีรอยไหม้ , บวม , เปลือกสายไฟไม่เปลี่ยนสี",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "ตำแหน่งสายไฟถูกกดทับ จากส่วนของอุปกรณ์อื่น หรือส่วนเคลื่อนที่ (บน-ล่าง, ซ้าย-ขวา) ของเครื่อง หรือไม่",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "ตำแหน่งสายไฟถูกเสียดสีจากส่วนที่มีคมที่เคลื่อนที่ หรือไม่",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "มีฝุ่นที่สะสมโดยรอบ หรือไม่",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "ตู้ไฟมีรู/ช่องว่างที่ด้านบน ด้านข้าง ด้านล่าง ที่ฝุ่น สัตว์ แมลงสามารถเข้าไปได้หรือไม่ [ทำให้เกิดการ Spark ได้]",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "ไม่มีรอยไหม้ที่อุปกรณ์ไฟฟ้าทุกชนิด",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "กรณีที่ breaker ตัดไฟรั่วอยู่ด้านนอก Control panel ให้ทดสอบการทำงาน",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "สภาพของ Connector ที่ต่อกับแบตเตอรี่ หรือตัวอุปกรณ์ไฟฟ้า ไม่แตก/ร้าว / ไม่หลวมคลอน",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "หากมี terminal box (กล่องรวมจุดต่อของสายไฟและต่อไปยังอุปกรณ์อื่นๆ ) กำหนดให้มีการเปิดทำความสะอาดหรือ inspection โดยผู้เชี่ยวชาญ (Facility or TPM.)",
                checklist_types_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "กำหนดระยะเวลาถอดและเช็ก Duct ด้านใน [กรณีอยู่ด้านล่างไม่เข้าข่ายสูง>2 เมตร]",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "ไม่มีฝุ่นสะสมที่ด้านล่าง ของ Duct",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "วีธีการถอดductและทำความสะอาด",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "นำ Duct คืนที่เดิม : เชื่อมต่อสายดิน เมื่อขัน bolt",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "Duct ที่มีส่วนของข้อต่อ ,ตกท้องช้าง หรือแนวนอน [เฉพาะส่วนด้านล่างที่ไม่เข้าข่ายทำงานที่สูง < 2 เมตร ] มีกำหนดระยะตรวจเช็คว่ามีของเหลวหรือฝุ่นผงสะสมอยู่ระหว่างทางหรือไม่",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "ไม่มีเศษขี้กลึงหรือ ฝุ่นสะสมที่ filter ของ duct collector ที่ทำให้อุดตันวีธีการถอดductและทำความสะอาด",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "ส่วนต่อของduct ด้วยหน้าแปลนต้องมี สายกราด์ทุกจุด",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "กำหนดให้เปลี่ยนน้ำใน Scrubber สัปดาห์ละครั้ง ",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "ตรวจเช็คการสะสมตัวของคราบน้ำมันและเศษฝุ่น รอบบริเวณที่มีการก่อไฟ หรือมีประกายไฟ",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "ไม่มีน้ำมันหรือของเหลวเมื่อ drain ของเสียแล้วไปสะสมอยู่ที่ด้านใน Collector ",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "มีการระบุช่วงเวลาเปลี่ยน Filter ของ Dust/mist collector ให้ชัดเจน และมีการเปลี่ยนตามที่กำหนด",
                checklist_types_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "ถัง ภาชนะเก็บมีฝาปิดมิดชิดหรือไม่",
                checklist_types_id: 3,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "มีป้ายระบุชื่อสาร และเอกสารSDS บ่งชี้",
                checklist_types_id: 3,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "Valve เปิด-ปิด มีสภาพสมบูรณ์ แข็งแรง มีบ่งชี้สถานะการใช้งาน",
                checklist_types_id: 3,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "5ส จุดที่ใช้/เก็บ อยู่ในสภาพดีหรือไม่  ",
                checklist_types_id: 3,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "ท่อ สาย ขนส่งไม่หักงอ ผิดรูป ข้อต่อไม่หลวม ",
                checklist_types_id: 4,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "ท่อ สาย ต้องมีการตรวจสอบการรั่วไหลโดยน้ำสบู่",
                checklist_types_id: 4,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "มีป้ายระบุชื่อสาร และเอกสารSDS บ่งชี้",
                checklist_types_id: 4,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details: "5ส จุดที่ใช้/เก็บ อยู่ในสภาพดีหรือไม่",
                checklist_types_id: 4,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "มีน้ำมัน , ฝุ่นผง , พาสติก , ขี้กลึง หรือสิ่งที่เป็นเชื้อเพลิงได้อยู่บริเวณใกล้เคียงหรือไม่",
                checklist_types_id: 5,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                details:
                    "มีการทำความสะอาด หรือทำให้สะเก็ดไฟดับหลังทำงาน หรือเสร็จกระบวนการหรือไม่",
                checklist_types_id: 5,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete("details_checklists", null);
    },
};
