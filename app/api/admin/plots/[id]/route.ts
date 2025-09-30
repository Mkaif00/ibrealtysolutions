// app/api/admin/plots/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const plotId = Number(params.id);
    const { status } = await req.json(); // Expected: 'available' or 'sold'

    if (!['available', 'sold'].includes(status)) {
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    try {
        const updatedPlot = await prisma.plot.update({
            where: { id: plotId },
            data: { status },
        });
        return NextResponse.json(updatedPlot);
    } catch (e) {
        return NextResponse.json({ error: 'Plot not found or update failed' }, { status: 404 });
    }
}