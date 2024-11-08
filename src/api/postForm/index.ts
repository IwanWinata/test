"use server";

import { contractorSchema } from "@/utils/config";
import { query } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = await contractorSchema.validate(body, { stripUnknown: true });

        console.log('insert form contractor');

        const insert = await query(
            `
            INSERT INTO "nc_8jh7__Form Home Buyer" 
            (
                "name", 
                "company_name", 
                "whatsapp_number",
                "email",
                "created_at"
            ) 
            VALUES ($1, $2, $3, $4, NOW())
            RETURNING *
            `
            ,
            [
                data.name,
                data.company_name,
                data.whatsapp_number,
                data.email
            ]
        );

        console.log(insert.command);

        return NextResponse.json({
            message: 'insert data successfully',
        })
    } catch (error) {
        return NextResponse.json({
            message: 'insert data failed',
        })
    }
}
