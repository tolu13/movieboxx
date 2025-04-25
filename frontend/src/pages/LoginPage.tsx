/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useLoginMutation } from "../redux/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authslice";
import { useNavigate } from "react-router-dom";
import { useGetUserInfoQuery } from "../redux/userApi";

export default function LoginPage() {
  const dispatch = useDispatch();
  useGetUserInfoQuery(undefined, {
    skip: true,
  });

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      const { user, access_token } = res;

      if (!user) {
        console.error("User not found in response:", res);
        return;
      }

      localStorage.setItem("token", access_token);
      dispatch(setCredentials({ user, token: access_token }));
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Welcome Back</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
