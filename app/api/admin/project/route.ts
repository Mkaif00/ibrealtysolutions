// app/api/admin/projects/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const projects = await prisma.project.findMany({
        select: { id: true, name: true, slug: true, mainImage: true },
        orderBy: { name: 'asc' }
    });
    return NextResponse.json(projects);
}
// Add POST logic later for project creation