// Quick API test script
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5000';

async function testAPI() {
  console.log('🧪 Testing API endpoints...\n');

  // Test health
  try {
    const healthRes = await fetch(`${BASE_URL}/`);
    console.log('✅ Health check:', await healthRes.text());
  } catch (err) {
    console.log('❌ Health check failed:', err.message);
  }

  // Test user registration
  try {
    const regRes = await fetch(`${BASE_URL}/api/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'API Test User',
        email: 'apitest@example.com',
        phone: '9999999999',
        password: 'testpass123'
      })
    });
    const regData = await regRes.json();
    console.log('📝 Registration:', regRes.status, regData.success ? '✅' : '❌', regData.message || regData.error);
  } catch (err) {
    console.log('❌ Registration failed:', err.message);
  }

  // Test user login
  try {
    const loginRes = await fetch(`${BASE_URL}/api/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'apitest@example.com',
        password: 'testpass123'
      })
    });
    const loginData = await loginRes.json();
    console.log('🔐 Login:', loginRes.status, loginData.success ? '✅' : '❌', loginData.error || 'Success');
  } catch (err) {
    console.log('❌ Login failed:', err.message);
  }

  // Test reservation creation
  try {
    const resRes = await fetch(`${BASE_URL}/api/reservation/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'API Test User',
        email: 'apitest@example.com',
        phone: '9999999999',
        date: '2025-11-15',
        time: '7:00 PM',
        seats: 3
      })
    });
    const resData = await resRes.json();
    console.log('🍽️ Reservation:', resRes.status, resData.success ? '✅' : '❌', resData.message || resData.error);
  } catch (err) {
    console.log('❌ Reservation failed:', err.message);
  }

  // Test admin endpoints
  try {
    const adminRes = await fetch(`${BASE_URL}/api/reservation`, {
      headers: { 'x-admin-secret': 'changeme' }
    });
    const adminData = await adminRes.json();
    console.log('👩‍💼 Admin access:', adminRes.status, adminData.success ? '✅' : '❌', `Found ${adminData.data?.length || 0} reservations`);
  } catch (err) {
    console.log('❌ Admin access failed:', err.message);
  }

  console.log('\n🏁 API test complete!');
}

// Check if node-fetch is available
if (typeof fetch === 'undefined') {
  console.log('❌ node-fetch not available. Install with: npm install node-fetch@2');
  process.exit(1);
}

testAPI().catch(console.error);