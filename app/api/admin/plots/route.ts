// app/api/admin/plots/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get('projectId');

    if (!projectId) {
        return NextResponse.json({ plots: [] });
    }

    const plots = await prisma.plot.findMany({
        where: { projectId: Number(projectId) },
        orderBy: { plotNumber: 'asc' },
    });
    
    return NextResponse.json(plots);
}