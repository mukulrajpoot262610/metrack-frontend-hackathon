import React from "react";
import Submission from "components/projects/upload";
import { ProtectedRoute } from "utils/ProtectedRoute";

export default function upload() {
  return (
    <>
      <ProtectedRoute>
        <div className="gap-4 pt-4 pb-10 mt-16">
          <Submission />
        </div>
      </ProtectedRoute>
    </>
  );
}
