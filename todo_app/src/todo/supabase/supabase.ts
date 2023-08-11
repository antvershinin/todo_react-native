import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://lxagybbigcrbibkxywic.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4YWd5YmJpZ2NyYmlia3h5d2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0ODc5MjQsImV4cCI6MjAwNzA2MzkyNH0.jrjcazbqOq0jpcq8avyb9gbUP0n7HJxJV1gJKGmY-UA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
  },
});
