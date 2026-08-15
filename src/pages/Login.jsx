import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Loader2, Mountain, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  // Email & Password Auth (Login / Sign Up)
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        
        if (email === 'admin@dawadi.com') {
          navigate('/admin');
        } else {
          alert('Registration successful! You are now logged in.');
          navigate('/');
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        if (email === 'admin@dawadi.com') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Social Login (Google only)
  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="min-h-[88vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-emerald-50/50 via-slate-50 to-slate-100">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-emerald-950/5 p-8 sm:p-10 space-y-6 relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />
        
        {/* Logo / Header */}
        <div className="text-center space-y-3 relative">
          <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-tr from-emerald-950 via-emerald-800 to-emerald-600 text-white shadow-lg shadow-emerald-900/20 mx-auto">
            <Mountain className="h-7 w-7 stroke-[2.2] text-emerald-100" />
            <div className="absolute -bottom-1 -right-1 bg-amber-400 p-0.5 rounded-full text-slate-950 border-2 border-white shadow-xs">
              <Compass className="h-3 w-3" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              {isSignUp ? 'Create an Account' : 'Welcome Back'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {isSignUp ? 'Sign up to manage your bookings and explore Nepal.' : 'Enter your credentials to access your Dawadi account.'}
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3.5 rounded-2xl font-medium text-center">
            {errorMsg}
          </div>
        )}

        {/* Email & Password Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-12 rounded-2xl text-xs cursor-pointer shadow-lg shadow-emerald-900/15 transition-all hover:scale-[1.01]"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : (isSignUp ? 'Create Account' : 'Sign In')}
          </Button>
        </form>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-[10px] uppercase tracking-wider font-bold">Or continue with</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        {/* Social Connect Button (Google only) */}
        <div>
          <button
            type="button"
            onClick={() => handleSocialLogin('google')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl text-xs font-bold text-slate-700 transition-all shadow-2xs cursor-pointer hover:border-slate-300"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Toggle between Login and Sign Up */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs text-emerald-800 font-bold hover:underline cursor-pointer"
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>

      </div>
    </div>
  );
}