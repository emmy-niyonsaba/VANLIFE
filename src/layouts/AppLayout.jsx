import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'
import Loading from '../components/Loading'

function AppLayout() {
        return (
                <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <ErrorBoundary>
                            <Suspense fallback={<Loading />}>
                                <main className="app-main">
                                    <Outlet />
                                </main>
                            </Suspense>
                        </ErrorBoundary>
                        <Footer />
                </div>
        )
}

export default AppLayout
