// API Routes
import { httpApiStore } from '@/app/utils/config';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  const date = await fetch('', {
    next: {
      revalidate: 24 * 60 * 60 // 24 hours * 60 minus * 60 seconds
    }
  })
  // Option 1: Xây dựng API bằng Next.js
  // const response = [
  //   {
  //     id: 1,
  //     name: 'Dev 1',
  //     salary: 1000,
  //   },
  //   {
  //     id: 2,
  //     name: 'Dev 2',
  //     salary: 2000,
  //   },
  // ];
  // return NextResponse.json(response, { status: 200 });

  // Option 2: Sử dụng API đã có sẵn
  try {
    const res = await httpApiStore.get('/api/Product');
    return NextResponse.json(res.data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ content: 'Lỗi Server', status: 500 })
  }
} 