"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function UpdateProfileForm({
  defaultName,
  defaultImage,
}: {
  defaultName: string;
  defaultImage: string;
}) {
  const router = useRouter();
  const [name, setName] = useState(defaultName);
  const [image, setImage] = useState(defaultImage);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({ name, image });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Could not update profile");
      return;
    }

    toast.success("Profile updated successfully");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleUpdate} className="mt-6 space-y-4">
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="input input-bordered w-full border-slate-300 bg-white"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Image URL</span>
        <input
          type="url"
          required
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="input input-bordered w-full border-slate-300 bg-white"
        />
      </label>

      <button type="submit" className="btn w-full bg-brand text-white hover:bg-brand-dark" disabled={loading}>
        {loading ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
}
