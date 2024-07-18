const { httpApiStore } = require('@/app/utils/config');
const { NextRequest, NextResponse } = require('next/server');

export async function GET(request) {
  let url = new URL(request.url);
  let params = new URLSearchParams(url.search)
  let id = params.get('id');

  const urlApi = `/api/Product/getbyid?id=${id}`;

  try {
    const res = await httpApiStore.get(urlApi);
    return NextResponse.json(res.data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ content: 'Lỗi Server', status: 500 })
  }
}

httpApiStore