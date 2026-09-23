"use client";

import AppCard from "@/components/shared/AppCard";
import { AppContext } from "@/context/AppContext";
import { IAppType } from "@/typescript/app.type";
import React, { useContext } from "react";
import Link from "next/link";

const InstallationPage = () => {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { installedApp } = context;

  return (
    <main className="min-h-screen bg-base-200/40">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-base-300 bg-base-100">

        {/* Background Decoration */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

        <div className="container relative mx-auto px-4 py-14 sm:py-18 lg:py-20">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* Left Content */}
            <div className="max-w-2xl text-center md:text-left">

              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

                My Applications
              </div>

              {/* Title */}
              <h1 className="text-4xl font-black tracking-tight text-base-content sm:text-5xl lg:text-6xl">

                Your Installed
                <span className="block text-primary">
                  Applications
                </span>

              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-7 text-base-content/60 sm:text-lg">

                Manage all the applications you have installed.
                Your favorite apps are always just one click away.

              </p>

            </div>

            {/* Installed Count Card */}
            <div className="stats border border-base-300 bg-base-100 shadow-xl">

              <div className="stat place-items-center">

                <div className="stat-title text-base-content/60">
                  Installed Apps
                </div>

                <div className="stat-value text-primary">
                  {installedApp.length}
                </div>

                <div className="stat-desc">
                  Applications installed
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= APPS SECTION ================= */}
      <section className="container mx-auto px-4 py-12 sm:py-16">

        {/* Section Header */}
        {installedApp.length > 0 && (
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
                Installed Apps
              </h2>

              <p className="mt-1 text-sm text-base-content/60">
                {installedApp.length}{" "}
                {installedApp.length === 1 ? "application" : "applications"}{" "}
                currently installed
              </p>
            </div>

            <div className="badge badge-primary badge-lg px-4 py-4">
              {installedApp.length} Apps
            </div>

          </div>
        )}


        {/* ================= INSTALLED APPS ================= */}
        {installedApp.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {installedApp.map(
              (app: IAppType, index: number) => (

                <div
                  key={app.id ?? index}
                  className="transition duration-300 hover:-translate-y-1"
                >
                  <AppCard app={app} />
                </div>

              )
            )}

          </div>

        ) : (

          /* ================= EMPTY STATE ================= */
          <div className="flex min-h-[420px] items-center justify-center">

            <div className="card w-full max-w-lg border border-base-300 bg-base-100 shadow-xl">

              <div className="card-body items-center px-6 py-12 text-center">

                {/* Icon */}
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-12 w-12 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                </div>

                <h2 className="card-title text-2xl">
                  No Apps Installed
                </h2>

                <p className="max-w-md text-base leading-7 text-base-content/60">
                  You have not installed any applications yet.
                  Explore our collection and install your favorite
                  apps to see them here.
                </p>

                <div className="card-actions mt-5">

                  <Link
                    href="/apps"
                    className="btn btn-primary px-7"
                  >
                    Explore Apps
                  </Link>

                </div>

              </div>

            </div>

          </div>

        )}

      </section>


      {/* ================= BOTTOM CTA ================= */}
      {installedApp.length > 0 && (
        <section className="container mx-auto px-4 pb-12 sm:pb-16">

          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-content sm:px-10 sm:py-12">

            {/* Decoration */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              <div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Discover More Amazing Apps
                </h2>

                <p className="mt-2 max-w-xl text-primary-content/80">
                  Explore our app collection and find something
                  new that fits your needs.
                </p>

              </div>

              <Link
                href="/apps"
                className="btn border-none bg-white px-7 text-primary hover:bg-base-200"
              >
                Explore Apps →
              </Link>

            </div>

          </div>

        </section>
      )}

    </main>
  );
};

export default InstallationPage;
