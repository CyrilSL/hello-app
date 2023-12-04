import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bieprwxdytkfaujqxxvc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpZXByd3hkeXRrZmF1anF4eHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MjI3MTcsImV4cCI6MjAxNjk5ODcxN30.EodhQcyf7294_P8UvrjFxuzFwYxP57aVSqLQdKZKLZU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
