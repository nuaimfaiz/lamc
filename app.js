// -------------------- DATA --------------------
const specialtiesByCategory = {
  "Internal Medicine & Sub-Specialties": ["Internal Medicine", "Cardiology", "Endocrinology, Diabetes, and Metabolism", "Gastroenterology", "Hematology", "Infectious Diseases", "Medical Genetics", "Nephrology", "Oncology (Medical Oncology)", "Pulmonology", "Rheumatology"],
  "Surgical Specialties": ["General Surgery", "Cardiothoracic Surgery", "Colon and Rectal Surgery", "Neurosurgery", "Ophthalmic Surgery (Ophthalmology)", "Oral and Maxillofacial Surgery", "Orthopedic Surgery", "Otolaryngology (ENT)", "Pediatric Surgery", "Plastic and Reconstructive Surgery", "Surgical Oncology", "Urology", "Vascular Surgery"],
  "Pediatrics & Neonatal Specialties": ["Pediatrics", "Neonatology (Neonatal-Perinatal Medicine)", "Pediatric Cardiology", "Pediatric Endocrinology", "Pediatric Gastroenterology", "Pediatric Hematology-Oncology", "Pediatric Infectious Diseases", "Pediatric Nephrology", "Pediatric Pulmonology", "Pediatric Rheumatology"],
  "Women’s Health": ["Obstetrics and Gynecology (OB-GYN)", "Maternal-Fetal Medicine", "Gynecologic Oncology", "Reproductive Endocrinology and Infertility"],
  "Neurology & Psychiatry": ["Neurology", "Child Neurology", "Psychiatry", "Child and Adolescent Psychiatry", "Geriatric Psychiatry"],
  "Diagnostic & Interventional Services": ["Radiology (Diagnostic Radiology)", "Interventional Radiology", "Nuclear Medicine", "Pathology (Anatomic and Clinical Pathology)"],
  "Emergency, Critical Care, & Anesthesia": ["Emergency Medicine", "Critical Care Medicine (Intensive Care)", "Anesthesiology", "Pain Medicine"],
  "Rehabilitation & Specialized Therapies": ["Physical Medicine and Rehabilitation (Physiatry)", "Dermatology", "Allergy and Immunology", "Geriatric Medicine", "Palliative Medicine", "Preventive Medicine"]
};

// Flatten all departments for dropdown
const allDepartments = Object.values(specialtiesByCategory).flat();

// Doctors (57 entries covering every specialty)
const doctorsData = [
  { id: "d1", name: "Dr. Sarah Chen", title: "Chief of Internal Medicine", specialty: "Internal Medicine", category: "Internal Medicine & Sub-Specialties", bio: "Expert in complex diagnosis.", img: "👩‍⚕️", qualifications: "MD, FACP" },
  { id: "d2", name: "Dr. Michael Torres", title: "Interventional Cardiologist", specialty: "Cardiology", category: "Internal Medicine & Sub-Specialties", bio: "Minimally invasive cardiac procedures.", img: "❤️", qualifications: "MD, FACC" },
  { id: "d3", name: "Dr. Emily Clark", title: "Endocrinologist", specialty: "Endocrinology, Diabetes, and Metabolism", category: "Internal Medicine & Sub-Specialties", bio: "Diabetes & metabolic disorders.", img: "🩺", qualifications: "MD, FACE" },
  { id: "d4", name: "Dr. David Kim", title: "Gastroenterologist", specialty: "Gastroenterology", category: "Internal Medicine & Sub-Specialties", bio: "Advanced endoscopy & liver diseases.", img: "🔬", qualifications: "MD, FACG" },
  { id: "d5", name: "Dr. Rachel Adams", title: "Hematologist", specialty: "Hematology", category: "Internal Medicine & Sub-Specialties", bio: "Blood disorders & bone marrow transplant.", img: "🩸", qualifications: "MD, FRCPC" },
  { id: "d6", name: "Dr. James Carter", title: "Infectious Disease Specialist", specialty: "Infectious Diseases", category: "Internal Medicine & Sub-Specialties", bio: "Tropical & hospital infections.", img: "🦠", qualifications: "MD, FIDSA" },
  { id: "d7", name: "Dr. Helen Zhang", title: "Medical Geneticist", specialty: "Medical Genetics", category: "Internal Medicine & Sub-Specialties", bio: "Genomic medicine & rare diseases.", img: "🧬", qualifications: "MD, PhD" },
  { id: "d8", name: "Dr. Fatima Al-Hassan", title: "Nephrologist", specialty: "Nephrology", category: "Internal Medicine & Sub-Specialties", bio: "Kidney transplant lead.", img: "🧫", qualifications: "MD, FASN" },
  { id: "d9", name: "Dr. Anita Verma", title: "Medical Oncologist", specialty: "Oncology (Medical Oncology)", category: "Internal Medicine & Sub-Specialties", bio: "Chemotherapy & targeted therapies.", img: "🔪", qualifications: "MD, DM" },
  { id: "d10", name: "Dr. Lucas Grey", title: "Pulmonologist", specialty: "Pulmonology", category: "Internal Medicine & Sub-Specialties", bio: "Interventional pulmonology.", img: "🌬️", qualifications: "MD, FCCP" },
  { id: "d11", name: "Dr. Maria Lopez", title: "Rheumatologist", specialty: "Rheumatology", category: "Internal Medicine & Sub-Specialties", bio: "Autoimmune & arthritis care.", img: "🦴", qualifications: "MD, FACR" },
  { id: "d12", name: "Dr. Robert Hayes", title: "General Surgeon", specialty: "General Surgery", category: "Surgical Specialties", bio: "Minimally invasive & acute care.", img: "🔪", qualifications: "MD, FACS" },
  { id: "d13", name: "Dr. Victor Chen", title: "Cardiothoracic Surgeon", specialty: "Cardiothoracic Surgery", category: "Surgical Specialties", bio: "Heart & lung transplant.", img: "❤️", qualifications: "MD, FACS" },
  { id: "d14", name: "Dr. Isabella Rossi", title: "Colorectal Surgeon", specialty: "Colon and Rectal Surgery", category: "Surgical Specialties", bio: "Laparoscopic bowel surgery.", img: "🩺", qualifications: "MD, FRCS" },
  { id: "d15", name: "Dr. James Okonkwo", title: "Neurosurgeon", specialty: "Neurosurgery", category: "Surgical Specialties", bio: "Brain & spine tumors.", img: "🧠", qualifications: "MD, PhD" },
  { id: "d16", name: "Dr. Olivia Wong", title: "Ophthalmologist", specialty: "Ophthalmic Surgery (Ophthalmology)", category: "Surgical Specialties", bio: "Cataract & LASIK surgery.", img: "👁️", qualifications: "MD, FACS" },
  { id: "d17", name: "Dr. Samuel Lee", title: "Oral Surgeon", specialty: "Oral and Maxillofacial Surgery", category: "Surgical Specialties", bio: "Maxillofacial reconstruction.", img: "🦷", qualifications: "DDS, MD" },
  { id: "d18", name: "Dr. Viktor Petrov", title: "Orthopedic Surgeon", specialty: "Orthopedic Surgery", category: "Surgical Specialties", bio: "Joint replacements & sports injuries.", img: "🦴", qualifications: "MS Ortho" },
  { id: "d19", name: "Dr. Nora Schmidt", title: "ENT Surgeon", specialty: "Otolaryngology (ENT)", category: "Surgical Specialties", bio: "Sinus & hearing restoration.", img: "👂", qualifications: "MD, FACS" },
  { id: "d20", name: "Dr. Peter White", title: "Pediatric Surgeon", specialty: "Pediatric Surgery", category: "Surgical Specialties", bio: "Neonatal & pediatric operations.", img: "👶", qualifications: "MD, FACS" },
  { id: "d21", name: "Dr. Sophia Ricci", title: "Plastic Surgeon", specialty: "Plastic and Reconstructive Surgery", category: "Surgical Specialties", bio: "Reconstructive & cosmetic.", img: "✨", qualifications: "MD, FACS" },
  { id: "d22", name: "Dr. Nina Kapoor", title: "Surgical Oncologist", specialty: "Surgical Oncology", category: "Surgical Specialties", bio: "Cancer tumor removal.", img: "🩺", qualifications: "MD, FACS" },
  { id: "d23", name: "Dr. Thomas Brown", title: "Urologist", specialty: "Urology", category: "Surgical Specialties", bio: "Robotic prostate surgery.", img: "🚽", qualifications: "MD, FACS" },
  { id: "d24", name: "Dr. Carlos Mendez", title: "Vascular Surgeon", specialty: "Vascular Surgery", category: "Surgical Specialties", bio: "Aneurysm & bypass.", img: "🩸", qualifications: "MD, FACS" },
  { id: "d25", name: "Dr. Emma Laurent", title: "Pediatrician", specialty: "Pediatrics", category: "Pediatrics & Neonatal Specialties", bio: "General child health.", img: "👶", qualifications: "MD, FAAP" },
  { id: "d26", name: "Dr. Liam O'Connor", title: "Neonatologist", specialty: "Neonatology (Neonatal-Perinatal Medicine)", category: "Pediatrics & Neonatal Specialties", bio: "Level IV NICU specialist.", img: "🍼", qualifications: "MD, FAAP" },
  { id: "d27", name: "Dr. Oliver Chen", title: "Pediatric Cardiologist", specialty: "Pediatric Cardiology", category: "Pediatrics & Neonatal Specialties", bio: "Congenital heart defects.", img: "❤️", qualifications: "MD, FACC" },
  { id: "d28", name: "Dr. Mia Johnson", title: "Pediatric Endocrinologist", specialty: "Pediatric Endocrinology", category: "Pediatrics & Neonatal Specialties", bio: "Growth & diabetes in children.", img: "📈", qualifications: "MD" },
  { id: "d29", name: "Dr. Ethan Brooks", title: "Pediatric Gastroenterologist", specialty: "Pediatric Gastroenterology", category: "Pediatrics & Neonatal Specialties", bio: "IBD & feeding issues.", img: "🍽️", qualifications: "MD" },
  { id: "d30", name: "Dr. Lily Adams", title: "Pediatric Hematologist-Oncologist", specialty: "Pediatric Hematology-Oncology", category: "Pediatrics & Neonatal Specialties", bio: "Childhood cancer & blood disorders.", img: "🩸", qualifications: "MD" },
  { id: "d31", name: "Dr. Noah Kim", title: "Pediatric Infectious Disease", specialty: "Pediatric Infectious Diseases", category: "Pediatrics & Neonatal Specialties", bio: "Pediatric ID & immunology.", img: "🦠", qualifications: "MD" },
  { id: "d32", name: "Dr. Ava Martinez", title: "Pediatric Nephrologist", specialty: "Pediatric Nephrology", category: "Pediatrics & Neonatal Specialties", bio: "Kidney diseases in children.", img: "🧫", qualifications: "MD" },
  { id: "d33", name: "Dr. William Zhao", title: "Pediatric Pulmonologist", specialty: "Pediatric Pulmonology", category: "Pediatrics & Neonatal Specialties", bio: "Asthma & cystic fibrosis.", img: "🌬️", qualifications: "MD" },
  { id: "d34", name: "Dr. Sophia Turner", title: "Pediatric Rheumatologist", specialty: "Pediatric Rheumatology", category: "Pediatrics & Neonatal Specialties", bio: "Juvenile arthritis.", img: "🦴", qualifications: "MD" },
  { id: "d35", name: "Dr. Rebecca Foster", title: "OB-GYN", specialty: "Obstetrics and Gynecology (OB-GYN)", category: "Women’s Health", bio: "Comprehensive women's care.", img: "🤰", qualifications: "MD, FACOG" },
  { id: "d36", name: "Dr. Laura Mitchell", title: "Maternal-Fetal Medicine", specialty: "Maternal-Fetal Medicine", category: "Women’s Health", bio: "High-risk pregnancy.", img: "👶", qualifications: "MD, MFM" },
  { id: "d37", name: "Dr. Priya Sharma", title: "Gynecologic Oncologist", specialty: "Gynecologic Oncology", category: "Women’s Health", bio: "Ovarian & uterine cancers.", img: "🎗️", qualifications: "MD, FACOG" },
  { id: "d38", name: "Dr. Jessica Wu", title: "Reproductive Endocrinology", specialty: "Reproductive Endocrinology and Infertility", category: "Women’s Health", bio: "Fertility & IVF.", img: "🍼", qualifications: "MD, REI" },
  { id: "d39", name: "Dr. Alan Grant", title: "Neurologist", specialty: "Neurology", category: "Neurology & Psychiatry", bio: "Stroke & epilepsy.", img: "🧠", qualifications: "MD, FAAN" },
  { id: "d40", name: "Dr. Karen Lewis", title: "Child Neurologist", specialty: "Child Neurology", category: "Neurology & Psychiatry", bio: "Pediatric seizures & development.", img: "👧", qualifications: "MD" },
  { id: "d41", name: "Dr. Steven Carter", title: "Psychiatrist", specialty: "Psychiatry", category: "Neurology & Psychiatry", bio: "Adult mental health.", img: "🧠", qualifications: "MD, FAPA" },
  { id: "d42", name: "Dr. Emily Foster", title: "Child Psychiatrist", specialty: "Child and Adolescent Psychiatry", category: "Neurology & Psychiatry", bio: "Adolescent & child therapy.", img: "👦", qualifications: "MD" },
  { id: "d43", name: "Dr. George Hamilton", title: "Geriatric Psychiatrist", specialty: "Geriatric Psychiatry", category: "Neurology & Psychiatry", bio: "Dementia & late-life mood disorders.", img: "👴", qualifications: "MD" },
  { id: "d44", name: "Dr. Laura Mendez", title: "Diagnostic Radiologist", specialty: "Radiology (Diagnostic Radiology)", category: "Diagnostic & Interventional Services", bio: "MRI, CT, ultrasound.", img: "🩻", qualifications: "MD, FSIR" },
  { id: "d45", name: "Dr. Henry Wu", title: "Interventional Radiologist", specialty: "Interventional Radiology", category: "Diagnostic & Interventional Services", bio: "Image-guided procedures.", img: "📡", qualifications: "MD, FSIR" },
  { id: "d46", name: "Dr. Maria Santos", title: "Nuclear Medicine", specialty: "Nuclear Medicine", category: "Diagnostic & Interventional Services", bio: "PET/CT & theranostics.", img: "☢️", qualifications: "MD, ABNM" },
  { id: "d47", name: "Dr. John Miller", title: "Pathologist", specialty: "Pathology (Anatomic and Clinical Pathology)", category: "Diagnostic & Interventional Services", bio: "Anatomic & clinical pathology.", img: "🔬", qualifications: "MD, FCAP" },
  { id: "d48", name: "Dr. Henry Wu (Emergency)", title: "Chief of Emergency Medicine", specialty: "Emergency Medicine", category: "Emergency, Critical Care, & Anesthesia", bio: "Trauma & disaster medicine.", img: "🚑", qualifications: "MD, FACEP" },
  { id: "d49", name: "Dr. Clara Benson", title: "Intensivist", specialty: "Critical Care Medicine (Intensive Care)", category: "Emergency, Critical Care, & Anesthesia", bio: "Medical & surgical ICU.", img: "🫀", qualifications: "MD, FCCM" },
  { id: "d50", name: "Dr. Mark Taylor", title: "Anesthesiologist", specialty: "Anesthesiology", category: "Emergency, Critical Care, & Anesthesia", bio: "Perioperative & pain management.", img: "💉", qualifications: "MD, FASA" },
  { id: "d51", name: "Dr. Rachel Green", title: "Pain Medicine Specialist", specialty: "Pain Medicine", category: "Emergency, Critical Care, & Anesthesia", bio: "Interventional pain & palliative.", img: "🩹", qualifications: "MD" },
  { id: "d52", name: "Dr. Andrew Scott", title: "Physiatrist", specialty: "Physical Medicine and Rehabilitation (Physiatry)", category: "Rehabilitation & Specialized Therapies", bio: "Neurorehabilitation & sports injuries.", img: "🏃", qualifications: "MD, FAAPMR" },
  { id: "d53", name: "Dr. Sophia Ricci (Derm)", title: "Dermatologist", specialty: "Dermatology", category: "Rehabilitation & Specialized Therapies", bio: "Medical & surgical dermatology.", img: "🧴", qualifications: "MD, FAAD" },
  { id: "d54", name: "Dr. Laura Chen", title: "Allergist/Immunologist", specialty: "Allergy and Immunology", category: "Rehabilitation & Specialized Therapies", bio: "Asthma & food allergies.", img: "🌸", qualifications: "MD, FAAAAI" },
  { id: "d55", name: "Dr. William Hart", title: "Geriatrician", specialty: "Geriatric Medicine", category: "Rehabilitation & Specialized Therapies", bio: "Comprehensive care for elderly.", img: "👴", qualifications: "MD, AGSF" },
  { id: "d56", name: "Dr. Helen Parker", title: "Palliative Medicine", specialty: "Palliative Medicine", category: "Rehabilitation & Specialized Therapies", bio: "Symptom management & end-of-life care.", img: "🌿", qualifications: "MD, FAAHPM" },
  { id: "d57", name: "Dr. Kevin Ross", title: "Preventive Medicine", specialty: "Preventive Medicine", category: "Rehabilitation & Specialized Therapies", bio: "Lifestyle & public health.", img: "🍎", qualifications: "MD, MPH" }
];

const publicationsData = [
  { id: "pub1", title: "Novel biomarkers in early-stage pancreatic adenocarcinoma", authors: "Chen S., Verma A., Torres M.", journal: "The Lancet Oncology", year: 2025, abstract: "Groundbreaking study identifying early detection markers improving survival rates by 34%." },
  { id: "pub2", title: "Neonatal neuroprotection after hypoxic-ischemic encephalopathy", authors: "Laurent E., Foster R.", journal: "Pediatrics International", year: 2024, abstract: "Therapeutic hypothermia protocols and long-term outcomes." },
  { id: "pub3", title: "AI-enhanced imaging for interventional radiology", authors: "Mendez L., Wu H.", journal: "Radiology: Artificial Intelligence", year: 2025, abstract: "Machine learning model reduces procedural complications." },
  { id: "pub4", title: "Advances in robotic cardiac surgery", authors: "Torres M., Okonkwo J.", journal: "JACC: Advances", year: 2025, abstract: "Comparative analysis of robotic vs conventional outcomes." }
];

const careersData = [
  { id: "career1", title: "Consultant - Interventional Cardiology", dept: "Cardiology", location: "Tropica Campus", type: "Full-time", desc: "Lead advanced cardiac interventions, research opportunities.", requirements: "DM/DNB Cardiology + 5 years exp." },
  { id: "career2", title: "Neonatal Intensivist", dept: "Neonatology", location: "NICU Level IV", type: "Full-time", desc: "Manage high-acuity neonates, train residents.", requirements: "MD Pediatrics + Fellowship in Neonatology." },
  { id: "career3", title: "Surgical Oncologist - HPB", dept: "Surgical Oncology", location: "Main OR", type: "Full-time", desc: "Hepatobiliary and pancreatic surgeries.", requirements: "MCh Surgical Oncology + 3 yrs." },
  { id: "career4", title: "Radiology Technician (MRI/CT)", dept: "Diagnostic Radiology", location: "Imaging Center", type: "Full-time", desc: "Perform advanced imaging, patient safety.", requirements: "Certified Radiologic Technologist." }
];

// -------------------- ROUTER --------------------
function slugify(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, '-'); }

function navigateTo(page, params = {}) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", page);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  window.history.pushState({}, "", url);
  renderPage();
}

function getRouteFromURL() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page") || "home";
  const obj = { page };
  for (const [k, v] of params.entries()) if (k !== "page") obj[k] = v;
  return obj;
}

// -------------------- COMPONENT RENDERERS --------------------
function renderHome() {
  return `
    <div class="hero-overlay glow-swoosh text-white py-20 px-4 relative">
      <div class="container mx-auto text-center md:text-left md:flex justify-between items-center relative z-10">
        <div>
          <h2 class="text-4xl md:text-6xl font-bold mb-4 playfair">World-Class Tertiary & Quaternary Care</h2>
          <p class="text-xl" style="color: #48CAE4; text-shadow: 0 0 4px rgba(0,0,0,0.3);">45+ Specialties | 200+ Expert Physicians | Advanced Research</p>
          <button onclick="navigateTo('book')" class="mt-6 btn-cyan px-6 py-3 rounded-full font-semibold shadow-lg">Schedule Appointment →</button>
        </div>
        <div class="mt-8 md:mt-0 relative">
          <i class="fas fa-stethoscope text-8xl opacity-80" style="color: #00B4D8; filter: drop-shadow(0 0 8px rgba(0,180,216,0.8));"></i>
          <div class="star-burst" style="top: -15px; right: -10px;"></div>
          <div class="star-burst" style="bottom: -5px; left: 20px;"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6 py-12">
      <h3 class="text-3xl font-bold text-navy mb-8 playfair">Centers of Excellence</h3>
      <div class="grid md:grid-cols-4 gap-6">
        ${Object.keys(specialtiesByCategory).slice(0,4).map(cat => `
          <div class="bg-white p-5 rounded-2xl shadow card-hover" style="border-bottom: 3px solid #00B4D8;">
            <i class="fas fa-hospital-user text-3xl mb-3" style="color: #1D8A99;"></i>
            <h4 class="font-bold text-xl text-navy">${cat}</h4>
            <p class="text-gray-500 text-sm">${specialtiesByCategory[cat].length} subspecialties</p>
            <button onclick="navigateTo('department', { cat: '${slugify(cat)}' })" class="mt-3 font-medium" style="color: #00B4D8;">Explore →</button>
          </div>
        `).join('')}
      </div>
      <div class="mt-12 p-6 rounded-2xl flex flex-wrap justify-between items-center" style="background: linear-gradient(120deg, #E0F7FA, #FFFFFF); border-left: 5px solid #00B4D8;">
        <div><i class="fas fa-map-marker-alt text-2xl" style="color: #007399;"></i> <span class="font-semibold text-navy">Lot 129 Hilton Ave., Greenverlooville, Manta</span><p class="text-sm">Tropica's leading quaternary referral center</p></div>
        <button onclick="navigateTo('contact')" class="btn-cyan text-navy px-5 py-2 rounded-full">Directions</button>
      </div>
    </div>
  `;
}

function renderDepartments() {
  return `
    <div class="container mx-auto px-6 py-10">
      <h2 class="text-3xl font-bold text-navy mb-2 playfair">All Medical Departments</h2>
      <p class="text-gray-500 mb-6">Tertiary & Quaternary care specialties across 8 clinical institutes</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${Object.keys(specialtiesByCategory).map(cat => `
          <div class="bg-white rounded-xl shadow-md p-6 card-hover" style="border-left: 5px solid #00B4D8;">
            <h3 class="text-xl font-bold text-navy">${cat}</h3>
            <div class="flex flex-wrap gap-2 mt-3">
              ${specialtiesByCategory[cat].slice(0,4).map(s => `<span class="px-2 py-1 rounded-full text-xs" style="background: #E0F7FA; color: #007399;">${s}</span>`).join('')}
              ${specialtiesByCategory[cat].length > 4 ? `<span class="text-xs text-gray-400">+${specialtiesByCategory[cat].length-4} more</span>` : ''}
            </div>
            <button onclick="navigateTo('department', { cat: '${slugify(cat)}' })" class="mt-4 font-medium flex items-center" style="color: #00B4D8;">View full department <i class="fas fa-arrow-right ml-2"></i></button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDepartment(catSlug) {
  const catEntry = Object.entries(specialtiesByCategory).find(([key]) => slugify(key) === catSlug);
  if (!catEntry) return "<div class='p-10'>Department not found</div>";
  const [category, subspecialties] = catEntry;
  const relatedDoctors = doctorsData.filter(d => d.category === category);
  return `
    <div class="container mx-auto px-6 py-10">
      <div class="bg-white rounded-2xl shadow p-6 md:p-8" style="border-top: 5px solid #00B4D8;">
        <h2 class="text-3xl font-bold text-navy playfair">${category}</h2>
        <p class="text-gray-500 mt-1">Quaternary care specialization cluster</p>
        <div class="mt-6"><h3 class="font-semibold text-lg">Subspecialties (${subspecialties.length})</h3><div class="flex flex-wrap gap-2 mt-3">${subspecialties.map(s => `<span class="px-3 py-1 rounded-full text-sm" style="background: #E0F7FA; color: #007399;">${s}</span>`).join('')}</div></div>
        <div class="mt-8"><h3 class="font-bold text-xl">Specialists in ${category}</h3><div class="grid md:grid-cols-2 gap-5 mt-4">${relatedDoctors.map(doc => `<div class="flex items-center space-x-3 border-b pb-3"><i class="fas fa-user-md text-3xl" style="color: #1D8A99;"></i><div><p class="font-bold">${doc.name}</p><p class="text-sm text-gray-500">${doc.title} · ${doc.specialty}</p><button onclick="navigateTo('doctor', { id: '${doc.id}' })" class="text-sm" style="color: #00B4D8;">View profile</button></div></div>`).join('') || '<p class="text-gray-400">No doctors listed yet.</p>'}</div></div>
      </div>
    </div>
  `;
}

function renderDoctors() {
  return `
    <div class="container mx-auto px-6 py-10">
      <h2 class="text-3xl font-bold text-navy playfair">Meet Our Experts</h2>
      <p class="text-gray-500 mb-4">Leaders in tertiary & quaternary medicine</p>
      <input type="text" id="doctorSearch" placeholder="Search by name or specialty..." class="border rounded-full px-5 py-2 w-full md:w-80 mb-6" style="border-color: #00B4D8;" onkeyup="filterDoctors()">
      <div id="doctorsGrid" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${doctorsData.map(doc => `<div class="doctor-card bg-white rounded-xl shadow-md overflow-hidden card-hover" data-name="${doc.name.toLowerCase()}" data-specialty="${doc.specialty.toLowerCase()}"><div class="h-32 flex items-center justify-center text-5xl" style="background: linear-gradient(135deg, #E0F7FA, #B3E5FC);">${doc.img}</div><div class="p-4"><h3 class="font-bold text-xl text-navy">${doc.name}</h3><p class="text-sm font-semibold" style="color: #1D8A99;">${doc.title}</p><p class="text-gray-500 text-xs">${doc.specialty}</p><p class="text-sm mt-2">${doc.bio}</p><button onclick="navigateTo('doctor', { id: '${doc.id}' })" class="mt-3 font-medium text-sm" style="color: #00B4D8;">Full Profile →</button></div></div>`).join('')}
      </div>
    </div>
    <script>
      window.filterDoctors = function() {
        const term = document.getElementById('doctorSearch').value.toLowerCase();
        document.querySelectorAll('.doctor-card').forEach(card => {
          const name = card.dataset.name, spec = card.dataset.specialty;
          if(name.includes(term) || spec.includes(term)) card.style.display = '';
          else card.style.display = 'none';
        });
      }
    <\/script>
  `;
}

function renderDoctor(id) {
  const doc = doctorsData.find(d => d.id === id);
  if (!doc) return "<div>Doctor not found</div>";
  return `<div class="container mx-auto px-6 py-10 max-w-4xl"><div class="bg-white rounded-2xl shadow-lg p-8" style="border-left: 8px solid #00B4D8;"><div class="flex flex-col md:flex-row gap-6 items-center md:items-start"><div class="w-32 h-32 rounded-full flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, #E0F7FA, #B3E5FC);">${doc.img}</div><div><h2 class="text-3xl font-bold text-navy playfair">${doc.name}</h2><p class="text-xl" style="color: #1D8A99;">${doc.title}</p><p class="text-gray-500">${doc.specialty} · ${doc.qualifications}</p><p class="mt-3">${doc.bio}</p><button onclick="navigateTo('book')" class="btn-cyan text-navy px-6 py-2 rounded-full mt-4 inline-block">Book consultation</button></div></div><div class="mt-6 border-t pt-4"><h3 class="font-bold">Department: ${doc.category}</h3><p>Clinical focus: ${doc.specialty}</p></div></div></div>`;
}

function renderPublications() {
  return `<div class="container mx-auto px-6 py-10"><h2 class="text-3xl font-bold text-navy playfair">Research Publications</h2><p class="text-gray-500 mb-6">Cutting-edge clinical research from Lumenova institute</p><div class="space-y-5">${publicationsData.map(pub => `<div class="bg-white p-5 rounded-xl shadow-sm card-hover"><h3 class="text-xl font-bold text-navy">${pub.title}</h3><p class="text-gray-600">${pub.authors} · ${pub.journal} (${pub.year})</p><button onclick="navigateTo('publication', { id: '${pub.id}' })" class="mt-2 font-medium" style="color: #00B4D8;">Read abstract →</button></div>`).join('')}</div></div>`;
}

function renderPublication(id) {
  const pub = publicationsData.find(p => p.id === id);
  if (!pub) return "<div>Not found</div>";
  return `<div class="container mx-auto px-6 py-10 max-w-3xl"><div class="bg-white p-8 rounded-2xl shadow"><h2 class="text-2xl font-bold text-navy playfair">${pub.title}</h2><p class="text-gray-600">${pub.authors} | ${pub.journal} ${pub.year}</p><div class="mt-4 border-l-4 border-cyan-500 pl-4 italic">${pub.abstract}</div><button onclick="navigateTo('publications')" class="mt-6" style="color:#00B4D8;">← Back to publications</button></div></div>`;
}

function renderCareers() {
  return `<div class="container mx-auto px-6 py-10"><h2 class="text-3xl font-bold text-navy playfair">Join Our Mission</h2><p class="text-gray-500 mb-6">Career opportunities at Lumenova Advanced Medical Centre</p><div class="grid md:grid-cols-2 gap-5">${careersData.map(career => `<div class="bg-white p-5 rounded-xl shadow-sm card-hover"><h3 class="text-xl font-bold text-navy">${career.title}</h3><p class="text-sm" style="color:#1D8A99;">${career.dept} · ${career.location}</p><p class="text-sm mt-2">${career.desc}</p><button onclick="navigateTo('career', { id: '${career.id}' })" class="mt-3 font-medium" style="color:#00B4D8;">View details →</button></div>`).join('')}</div></div>`;
}

function renderCareer(id) {
  const career = careersData.find(c => c.id === id);
  if (!career) return "<div>Position not found</div>";
  return `<div class="container mx-auto px-6 py-10 max-w-3xl"><div class="bg-white rounded-2xl shadow p-8"><h2 class="text-2xl font-bold text-navy playfair">${career.title}</h2><p><i class="fas fa-building"></i> ${career.dept} | ${career.location} | ${career.type}</p><div class="mt-4"><h3 class="font-semibold">Description</h3><p>${career.desc}</p><h3 class="font-semibold mt-3">Requirements</h3><p>${career.requirements}</p></div><button onclick="navigateTo('book')" class="btn-cyan text-navy px-5 py-2 rounded-full mt-5">Apply Now</button></div></div>`;
}

function renderAbout() {
  return `<div class="container mx-auto px-6 py-12 max-w-5xl"><div class="bg-white rounded-2xl shadow-lg p-8" style="border-top: 5px solid #00B4D8;"><h2 class="text-3xl font-bold text-navy playfair">About Lumenova Advanced Medical Centre</h2><p class="mt-4">Established as Tropica's first quaternary care hub, Lumenova integrates world-class clinical research, cutting-edge technology, and compassionate patient experience. Located at Lot 129 Hilton Ave., Greenverlooville, Manta — we serve the region with over 45 medical and surgical specialties.</p><p class="mt-3">Accredited with Gold Seal by JCI, we lead in solid organ transplantation, robotic microsurgery, and genomic medicine. Our multidisciplinary teams pioneer novel therapies across cardiology, oncology, neurosciences, and neonatology.</p><div class="grid md:grid-cols-3 gap-4 mt-8 text-center"><div class="p-4 rounded" style="background: #E0F7FA;"><i class="fas fa-microscope text-3xl" style="color:#007399;"></i><p class="font-bold mt-2">200+ Clinical Trials</p></div><div class="p-4 rounded" style="background: #E0F7FA;"><i class="fas fa-user-md text-3xl" style="color:#007399;"></i><p class="font-bold mt-2">250+ Specialists</p></div><div class="p-4 rounded" style="background: #E0F7FA;"><i class="fas fa-globe text-3xl" style="color:#007399;"></i><p class="font-bold mt-2">Global Referrals</p></div></div></div></div>`;
}

function renderContact() {
  return `<div class="container mx-auto px-6 py-12 max-w-5xl"><div class="bg-white rounded-2xl shadow p-8"><h2 class="text-3xl font-bold text-navy playfair">Contact & Access</h2><div class="grid md:grid-cols-2 gap-8 mt-6"><div><p class="font-semibold"><i class="fas fa-map-pin" style="color:#007399;"></i> Long Address:</p><p>Lot 129, Hilton Ave., Greenerlooville, Tropica, 20912, Manta</p><p class="mt-3 font-semibold">📞 Emergency: +1 (555) 999-0123</p><p>📧 international@lumenova.manta</p><p>🕒 24/7 Emergency & Critical Care</p></div><div><iframe width="100%" height="200" style="border:0; border-radius:16px;" loading="lazy" src="https://maps.google.com/maps?q=Lot%20129%20Hilton%20Ave%20Greenverlooville&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe></div></div><div class="mt-8"><h3 class="font-bold">Send us a message</h3><form id="contactForm" onsubmit="event.preventDefault(); alert('Message sent! Lumenova team will reach you.'); this.reset();"><div class="grid md:grid-cols-2 gap-3 mt-2"><input type="text" placeholder="Name" class="border p-2 rounded" required><input type="email" placeholder="Email" class="border p-2 rounded" required></div><textarea rows="3" placeholder="Your inquiry" class="border p-2 rounded w-full mt-3"></textarea><button type="submit" class="btn-cyan text-navy px-5 py-2 rounded-full mt-3">Send Message</button></form></div></div></div>`;
}

function renderBook() {
  // Generate dropdown options dynamically from all departments
  const departmentOptions = allDepartments.map(dept => `<option value="${dept}">${dept}</option>`).join('');
  return `
    <div class="container mx-auto px-6 py-12 max-w-2xl">
      <div class="bg-white rounded-2xl shadow-xl p-8" style="border: 1px solid #00B4D8;">
        <h2 class="text-2xl font-bold text-navy playfair">Request an Appointment</h2>
        <p class="text-gray-500 mb-4">Our patient coordinators will contact you within 2 hours</p>
        <form id="appointmentForm" onsubmit="event.preventDefault(); localStorage.setItem('appointment', JSON.stringify(Object.fromEntries(new FormData(this)))); alert('Appointment request saved. A representative will follow up soon.'); this.reset();">
          <div class="grid gap-4">
            <input type="text" name="fullName" placeholder="Full Name" class="border p-3 rounded-lg" required>
            <input type="email" name="email" placeholder="Email Address" class="border p-3 rounded-lg" required>
            <input type="tel" name="phone" placeholder="Phone" class="border p-3 rounded-lg" required>
            <select name="specialty" class="border p-3 rounded-lg" required>
              <option value="">Select a department</option>
              ${departmentOptions}
            </select>
            <input type="date" name="date" class="border p-3 rounded-lg" required>
            <textarea name="reason" rows="3" placeholder="Brief reason for visit" class="border p-3 rounded-lg"></textarea>
            <button type="submit" class="btn-cyan text-navy py-3 rounded-full text-lg">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// -------------------- MAIN RENDER FUNCTION --------------------
function renderPage() {
  const route = getRouteFromURL();
  let content = "";
  switch (route.page) {
    case "home": content = renderHome(); break;
    case "departments": content = renderDepartments(); break;
    case "department": content = renderDepartment(route.cat); break;
    case "doctors": content = renderDoctors(); break;
    case "doctor": content = renderDoctor(route.id); break;
    case "publications": content = renderPublications(); break;
    case "publication": content = renderPublication(route.id); break;
    case "careers": content = renderCareers(); break;
    case "career": content = renderCareer(route.id); break;
    case "about": content = renderAbout(); break;
    case "contact": content = renderContact(); break;
    case "book": content = renderBook(); break;
    default: content = renderHome();
  }
  document.getElementById("app").innerHTML = `
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-2 cursor-pointer" onclick="navigateTo('home')">
          <div class="logo-cross">
            <div class="cross-shadow"></div>
            <div class="cross-symbol">
              <div class="cross-vertical"></div>
              <div class="cross-horizontal"></div>
            </div>
            <div class="star-burst"></div>
            <div class="star-burst"></div>
            <div class="star-burst"></div>
            <div class="star-burst"></div>
          </div>
          <div>
            <h1 class="text-xl font-bold text-navy">Lumenova <span style="color: #007399;">Medical</span></h1>
            <p class="text-xs" style="color: #00B4D8;">Advanced Tertiary Care</p>
          </div>
        </div>
        <nav class="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" onclick="navigateTo('home')" class="hover-cyan">Home</a>
          <a href="#" onclick="navigateTo('departments')" class="hover-cyan">Departments</a>
          <a href="#" onclick="navigateTo('doctors')" class="hover-cyan">Doctors</a>
          <a href="#" onclick="navigateTo('publications')" class="hover-cyan">Publications</a>
          <a href="#" onclick="navigateTo('careers')" class="hover-cyan">Careers</a>
          <a href="#" onclick="navigateTo('about')" class="hover-cyan">About</a>
          <a href="#" onclick="navigateTo('contact')" class="hover-cyan">Contact</a>
          <a href="#" onclick="navigateTo('book')" class="btn-cyan text-navy px-4 py-2 rounded-full">Book</a>
        </nav>
        <button id="mobileMenuBtn" class="md:hidden text-2xl" style="color: #00B4D8;"><i class="fas fa-bars"></i></button>
      </div>
      <div id="mobileMenu" class="md:hidden hidden bg-white border-t px-4 pb-4 flex flex-col space-y-3">
        <a href="#" onclick="navigateTo('home'); toggleMobile()">Home</a>
        <a href="#" onclick="navigateTo('departments'); toggleMobile()">Departments</a>
        <a href="#" onclick="navigateTo('doctors'); toggleMobile()">Doctors</a>
        <a href="#" onclick="navigateTo('publications'); toggleMobile()">Publications</a>
        <a href="#" onclick="navigateTo('careers'); toggleMobile()">Careers</a>
        <a href="#" onclick="navigateTo('about'); toggleMobile()">About</a>
        <a href="#" onclick="navigateTo('contact'); toggleMobile()">Contact</a>
        <a href="#" onclick="navigateTo('book'); toggleMobile()" class="btn-cyan text-center py-2 rounded-full">Book Appointment</a>
      </div>
    </header>
    <main>${content}</main>
    <footer class="bg-gray-900 text-gray-300 pt-12 pb-6 mt-12">
      <div class="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-3">
            <div class="logo-cross scale-75"></div>
            <h3 class="text-white text-xl font-bold">Lumenova Medical</h3>
          </div>
          <p class="text-sm">Lot 129, Hilton Ave., Greenerlooville, Tropica, 20912, Manta</p>
          <p class="text-sm mt-2"><i class="fas fa-phone-alt mr-2" style="color:#00B4D8;"></i> +1 (555) 234-8900</p>
          <p class="text-sm"><i class="fas fa-envelope mr-2" style="color:#00B4D8;"></i> hello@lumenovamedical.manta</p>
        </div>
        <div><h4 class="text-white font-semibold mb-3">Quick Links</h4><ul class="space-y-2 text-sm"><li><a href="#" onclick="navigateTo('departments')" class="hover:text-cyan-300">Departments</a></li><li><a href="#" onclick="navigateTo('doctors')" class="hover:text-cyan-300">Find a Doctor</a></li><li><a href="#" onclick="navigateTo('publications')" class="hover:text-cyan-300">Publications</a></li><li><a href="#" onclick="navigateTo('careers')" class="hover:text-cyan-300">Careers</a></li></ul></div>
        <div><h4 class="text-white font-semibold mb-3">Care Services</h4><ul class="space-y-2 text-sm"><li>24/7 Emergency</li><li>Critical Care</li><li>Robotic Surgery</li></ul></div>
        <div><h4 class="text-white font-semibold mb-3">Accreditation</h4><p class="text-sm">JCI Accredited | NABH</p><div class="flex space-x-3 mt-4"><i class="fab fa-facebook-f text-xl hover:text-cyan-400 cursor-pointer"></i><i class="fab fa-twitter text-xl hover:text-cyan-400 cursor-pointer"></i><i class="fab fa-linkedin-in text-xl hover:text-cyan-400 cursor-pointer"></i></div></div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-5 text-center text-xs">© 2026 Lumenova Advanced Medical Centre — Illuminating the future of healthcare</div>
    </footer>
  `;
  document.getElementById("mobileMenuBtn")?.addEventListener("click", () => { document.getElementById("mobileMenu").classList.toggle("hidden"); });
  window.toggleMobile = () => document.getElementById("mobileMenu")?.classList.add("hidden");
  window.navigateTo = navigateTo;
  if (typeof window.filterDoctors === 'undefined') window.filterDoctors = () => {};
}

window.addEventListener("popstate", renderPage);
renderPage();
