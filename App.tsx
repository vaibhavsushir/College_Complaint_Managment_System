export default function App(){
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ color: '#0056b3' }}>College Complaint Management System</h1>
      <p style={{ fontSize: '1.2rem', color: 'green', fontWeight: 'bold' }}>
      </p>
      <div style={{ backgroundColor: '#fff3cd', padding: '1rem', borderLeft: '4px solid #ffeeba', margin: '1.5rem 0' }}>
        <p style={{ margin: 0, color: '#856404' }}>
          <strong>Note:</strong> Because this project requires a <strong>local MySQL database</strong>, it cannot run directly in this web preview environment.
        </p>
      </div>
      <h2>How to run locally:</h2>
      <ol style={{ fontSize: '1.1rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Click the <strong>Export</strong> button (top right menu) to download the project as a ZIP file.</li>
        <li style={{ marginBottom: '0.5rem' }}>Extract the ZIP file on your laptop.</li>
        <li style={{ marginBottom: '0.5rem' }}>Follow the instructions in the <code>README.md</code> file to set up MySQL, the backend, and the frontend.</li>
      </ol>
    </div>
  );
}
