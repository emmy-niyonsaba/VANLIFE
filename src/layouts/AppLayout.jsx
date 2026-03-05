import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'

function AppLayout() {
        return (
                <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <ErrorBoundary>
                           
                                <main className="app-main">
                                    <Outlet />
                                </main>
                            
                        </ErrorBoundary>
                        <Footer />
                </div>
        )
}

export default AppLayout
