'use client'

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link'; // Ensure Link is imported

interface Project { id: number; name: string; slug: string; mainImage: string }
interface Plot { id: number; plotNumber: string; size: string; price: number; status: 'available' | 'sold'; image: string }

export default function PlotInventoryPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [plots, setPlots] = useState<Plot[]>([]);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        fetch('/api/admin/projects').then(res => res.json()).then(data => {
            setProjects(data);
            if (data.length > 0) {
                setSelectedProjectId(data[0].id);
            }
        });
    }, []);

    useEffect(() => {
        if (selectedProjectId) {
            fetchPlots(selectedProjectId);
        } else {
            setPlots([]);
        }
    }, [selectedProjectId]);

    const fetchPlots = async (projectId: number) => {
        setLoading(true);
        const res = await fetch(`/api/admin/plots?projectId=${projectId}`);
        const data = await res.json();
        setPlots(data);
        setLoading(false);
    };

    const handleStatusUpdate = async (plotId: number, newStatus: 'available' | 'sold') => {
        setStatusMessage('Updating plot status...');
        const res = await fetch(`/api/admin/plots/${plotId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
        });
        
        if (res.ok) {
            fetchPlots(selectedProjectId!);
            setStatusMessage(`Status updated successfully.`);
        } else {
            setStatusMessage('Failed to update status.');
        }
        setTimeout(() => setStatusMessage(''), 3000);
    };

    return (
        <div className="p-4 md:p-8">
            {/* ... (Header and Project Selector remain the same) ... */}
            <h1 className="text-3xl font-bold mb-6 text-white">Plot Inventory Management</h1>
            <div className="bg-gray-800 p-6 rounded-lg mb-8 shadow-xl">
                <h2 className="text-xl font-semibold mb-3">Select Project</h2>
                <select 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
                    value={selectedProjectId || ''}
                    onChange={(e) => setSelectedProjectId(Number(e.target.value))}
                >
                    <option value="">Select a Project</option>
                    {projects.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                </select>
            </div>
            
            {statusMessage && (
                <div className="bg-blue-500 p-3 rounded mb-4 text-center">{statusMessage}</div>
            )}

            <h2 className="text-2xl font-semibold mb-4 text-white">Plots ({plots.length})</h2>

            {loading ? (
                <div className="text-center py-10">Loading plots...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plots.map(plot => (
                        <div key={plot.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            
                            {/* --- STATUS INDICATOR BLOCK (New/Updated) --- */}
                            <div className={`h-16 relative flex items-center justify-center text-lg font-bold text-white ${
                                plot.status === 'available' ? 'bg-blue-500' : 'bg-red-600' // Blue for Available, Red for Sold
                            }`}>
                                {plot.status === 'available' ? 'Available' : 'Sold'}
                            </div>
                            
                            {/* --- DETAILS CONTENT --- */}
                            <div className="p-4 space-y-2">
                                <h3 className="font-bold text-xl">Plot # {plot.plotNumber}</h3>
                                <p>Size: {plot.size}</p>
                                <p>Price: ${plot.price.toLocaleString()}</p>
                                
                                <div className="pt-3 border-t border-gray-700 flex justify-around">
                                    {plot.status === 'available' ? (
                                        <button 
                                            onClick={() => handleStatusUpdate(plot.id, 'sold')} 
                                            className="flex items-center gap-1 text-red-400 hover:text-red-300 transition"
                                        >
                                            <XCircle size={18} /> Mark Sold
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={() => handleStatusUpdate(plot.id, 'available')} 
                                            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition"
                                        >
                                            <CheckCircle size={18} /> Mark Available
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {plots.length === 0 && !loading && selectedProjectId && (
                        <p className="col-span-3 text-center text-gray-400">No plots found for this project.</p>
                    )}
                </div>
            )}
        </div>
    );
}