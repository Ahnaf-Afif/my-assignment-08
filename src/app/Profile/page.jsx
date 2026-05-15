"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const defaultImage =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

const getImageUrl = (url) => {
  const trimmedUrl = url.trim();
  try {
    const parsedUrl = new URL(trimmedUrl);
    return (
      parsedUrl.searchParams.get("imgurl") ||
      parsedUrl.searchParams.get("url") ||
      trimmedUrl
    );
  } catch {
    return trimmedUrl;
  }
};

const Profile = () => {
  const { data: session, isPending, refetch } = authClient.useSession();
  const user = session?.user;
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setNickname(user?.name || "");
    setImage(user?.image || "");
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    const imageUrl = getImageUrl(image);

    const { error } = await authClient.updateUser({
      name: nickname,
      image: imageUrl || null,
    });

    setSaving(false);

    if (error) {
      toast(error.message);
      return;
    }

    setImage(imageUrl);
    await refetch();
    toast("Profile updated");
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Please login to view profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-base-200">
      <div className="w-full max-w-md rounded-lg bg-base-100 p-8 shadow">
        <div className="flex flex-col items-center gap-3">
          <img
            src={getImageUrl(image || user.image || "") || defaultImage}
            alt="profile"
            className="h-28 w-28 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = defaultImage;
            }}
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <form onSubmit={handleUpdate} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium">Nickname</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="input input-bordered mt-2 w-full text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Profile image URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input input-bordered mt-2 w-full text-white"
              placeholder="https://example.com/profile.jpg"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            {saving ? "Updating..." : "Update Profile"}
          </button>
          <Link href="/">
            <button type="button" className="btn bg-orange-600 w-full mt-3">
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Profile;
