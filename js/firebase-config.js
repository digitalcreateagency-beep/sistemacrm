  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD775h8BBglzDCSx2jkC5hKT97qJGZ-MJg",
    authDomain: "crm-digitalcreate.firebaseapp.com",
    projectId: "crm-digitalcreate",
    storageBucket: "crm-digitalcreate.firebasestorage.app",
    messagingSenderId: "633842305840",
    appId: "1:633842305840:web:400c2ae135c3edb136d6f5",
    measurementId: "G-V21DE8DZ74"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  window._crmDb = db;
  const auth = getAuth(app);
  const storage = getStorage(app);
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/drive.readonly');

  // ── Firebase Storage helpers ──────────────────────────────────────────────

  // Faz upload de um File para o Firebase Storage e retorna a URL pública.
  window.storageUpload = (file, path, onProgress) => new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    const task = uploadBytesResumable(storageRef, file);
    task.on('state_changed',
      snap => { if (onProgress) onProgress(Math.round(snap.bytesTransferred / snap.totalBytes * 100)); },
      err => reject(err),
      async () => { try { resolve(await getDownloadURL(task.snapshot.ref)); } catch(e) { reject(e); } }
    );
  });

  // Gera um ID único simples para nomes de arquivo
  window.storageGenId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  // Remove arquivo do Firebase Storage pelo caminho
  window.storageDelete = async (pathOrUrl) => {
    try {
      // Se for URL completa do Storage, extrai o path
      const storageRef = pathOrUrl.startsWith('http')
        ? ref(storage, decodeURIComponent(pathOrUrl.split('/o/')[1]?.split('?')[0] || pathOrUrl))
        : ref(storage, pathOrUrl);
      await deleteObject(storageRef);
    } catch(e) { console.warn('storageDelete:', e.message); }
    return true;
  };

  window.storageList = async (_path) => { return []; };

  // ── Arquivos do CRM (pasta de cada usuário/geral) ─────────────────────────
  window.saveCrmFile = async (data) => {
    // data = { name, url, fullPath, size, type, uploadedBy, uploadedByName, folderId, createdAt }
    try {
      const ref2 = await addDoc(collection(db, 'crm_files'), { ...data, createdAt: new Date().toISOString() });
      return ref2.id;
    } catch(e) { console.error('saveCrmFile:', e); return null; }
  };
  window.loadCrmFiles = async () => {
    try {
      const q = query(collection(db, 'crm_files'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { console.error('loadCrmFiles:', e); return []; }
  };
  window.deleteCrmFile = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_files', id));
      return true;
    } catch(e) { return false; }
  };

  // ── Formulários personalizados ────────────────────────────────────────────
  window.saveCustomForm = async (data) => {
    try {
      if (data.id) {
        const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
        await updateDoc(doc(db, 'crm_custom_forms', data.id), { ...data, updatedAt: new Date().toISOString() });
        return data.id;
      } else {
        const ref2 = await addDoc(collection(db, 'crm_custom_forms'), { ...data, createdAt: new Date().toISOString() });
        return ref2.id;
      }
    } catch(e) { console.error('saveCustomForm:', e); return null; }
  };
  window.loadCustomForms = async () => {
    try {
      const q = query(collection(db, 'crm_custom_forms'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { console.error('loadCustomForms:', e); return []; }
  };
  window.loadCustomFormById = async (id) => {
    try {
      const snap = await getDoc(doc(db, 'crm_custom_forms', id));
      return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    } catch(e) { return null; }
  };
  window.deleteCustomForm = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_custom_forms', id));
      return true;
    } catch(e) { return false; }
  };
  window.saveFormResponse = async (formId, data) => {
    try {
      const ref2 = await addDoc(collection(db, 'crm_form_responses'), { ...data, formId, submittedAt: new Date().toISOString() });
      return ref2.id;
    } catch(e) { console.error('saveFormResponse:', e); return null; }
  };
  window.loadFormResponses = async (formId) => {
    try {
      const q = query(collection(db, 'crm_form_responses'), orderBy('submittedAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(d => d.formId === formId);
    } catch(e) { return []; }
  };

  // ── Lembretes ─────────────────────────────────────────────────────────────
  window.saveLembrete = async (data) => {
    try {
      const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      if (data.id) {
        await updateDoc(doc(db, 'crm_lembretes', data.id), { ...data, updatedAt: new Date().toISOString() });
        return data.id;
      } else {
        const ref2 = await addDoc(collection(db, 'crm_lembretes'), { ...data, createdAt: new Date().toISOString() });
        return ref2.id;
      }
    } catch(e) { console.error('saveLembrete:', e); return null; }
  };
  window.loadLembretes = async () => {
    try {
      const q = query(collection(db, 'crm_lembretes'), orderBy('dataHora', 'asc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { return []; }
  };
  window.deleteLembrete = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_lembretes', id)); return true;
    } catch(e) { return false; }
  };

  // ── Avaliações de Clientes ────────────────────────────────────────────────
  window.saveAvaliacao = async (data) => {
    try {
      const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      if (data.id) {
        await updateDoc(doc(db, 'crm_avaliacoes', data.id), { ...data, updatedAt: new Date().toISOString() });
        return data.id;
      } else {
        const ref2 = await addDoc(collection(db, 'crm_avaliacoes'), { ...data, createdAt: new Date().toISOString() });
        return ref2.id;
      }
    } catch(e) { console.error('saveAvaliacao:', e); return null; }
  };
  window.loadAvaliacoes = async (clientId) => {
    try {
      const q = query(collection(db, 'crm_avaliacoes'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(d => d.clientId === clientId);
    } catch(e) { return []; }
  };
  window.deleteAvaliacao = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_avaliacoes', id)); return true;
    } catch(e) { return false; }
  };

  // ── Notas de Calendário por Cliente ──────────────────────────────────────
  window.saveCalNote = async (data) => {
    try {
      const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      if (data.id) {
        await updateDoc(doc(db, 'crm_cal_notes', data.id), { ...data, updatedAt: new Date().toISOString() });
        return data.id;
      } else {
        const ref2 = await addDoc(collection(db, 'crm_cal_notes'), { ...data, createdAt: new Date().toISOString() });
        return ref2.id;
      }
    } catch(e) { console.error('saveCalNote:', e); return null; }
  };
  window.loadCalNotes = async (clientId) => {
    try {
      const q = query(collection(db, 'crm_cal_notes'), orderBy('data', 'asc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(d => d.clientId === clientId);
    } catch(e) { return []; }
  };
  window.deleteCalNote = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_cal_notes', id)); return true;
    } catch(e) { return false; }
  };

  // ── Alertas / Problemas por Cliente ──────────────────────────────────────
  window.saveAlerta = async (data) => {
    try {
      const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      if (data.id) {
        await updateDoc(doc(db, 'crm_alertas', data.id), { ...data, updatedAt: new Date().toISOString() });
        return data.id;
      } else {
        const ref2 = await addDoc(collection(db, 'crm_alertas'), { ...data, createdAt: new Date().toISOString() });
        return ref2.id;
      }
    } catch(e) { console.error('saveAlerta:', e); return null; }
  };
  window.loadAlertas = async (clientId) => {
    try {
      const q = query(collection(db, 'crm_alertas'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(d => d.clientId === clientId);
    } catch(e) { return []; }
  };
  window.deleteAlerta = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_alertas', id)); return true;
    } catch(e) { return false; }
  };

  // ── Notas Rápidas ─────────────────────────────────────────────────────────
  window.saveNotaRapida = async (data) => {
    try {
      const ref2 = await addDoc(collection(db, 'crm_notas'), { ...data, createdAt: new Date().toISOString() });
      return ref2.id;
    } catch(e) { console.error('saveNotaRapida:', e); return null; }
  };
  window.loadNotasRapidas = async () => {
    try {
      const q = query(collection(db, 'crm_notas'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { return []; }
  };
  window.deleteNotaRapida = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_notas', id)); return true;
    } catch(e) { return false; }
  };

  // ── Auth helpers ──────────────────────────────────────────────────────────
  window.doGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential && credential.accessToken) {
        window._googleAccessToken = credential.accessToken;
        localStorage.setItem('dc_drive_token', credential.accessToken);
      }
    } catch(e) { alert('Erro ao entrar: ' + e.message); }
  };

  window.refreshDriveToken = async () => {
    try {
      // Cria provider com prompt:'consent' para forçar o Google a reemitir
      // o accessToken do Drive (sem isso, token expira e não renova)
      const driveProvider = new GoogleAuthProvider();
      driveProvider.addScope('https://www.googleapis.com/auth/drive.readonly');
      driveProvider.setCustomParameters({ prompt: 'consent' });
      const result = await signInWithPopup(auth, driveProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential && credential.accessToken) {
        window._googleAccessToken = credential.accessToken;
        localStorage.setItem('dc_drive_token', credential.accessToken);
        return true;
      }
    } catch(e) { console.error('Drive token refresh:', e); }
    return false;
  };
  window.doLogout = async () => {
    await signOut(auth);
    window.currentUser = null;
    window.currentRole = null;
    showLoginScreen();
  };

  // ── Firestore helpers ─────────────────────────────────────────────────────
  window.saveToFirebase = async (data) => {
    try { await setDoc(doc(db, 'crm', 'data'), data); }
    catch(e) { console.error('Firebase save error:', e); }
  };
  window.loadFromFirebase = async () => {
    try {
      const snap = await getDoc(doc(db, 'crm', 'data'));
      if (snap.exists()) return snap.data();
    } catch(e) { console.error('Firebase load error:', e); }
    return null;
  };

  // User roles stored in Firestore: crm/users/{uid} = { name, email, photo, role }
  window.loadUserRole = async (uid) => {
    try {
      const snap = await getDoc(doc(db, 'crm_users', uid));
      if (snap.exists()) return snap.data();
    } catch(e) {}
    return null;
  };
  window.saveUserRole = async (uid, data) => {
    try { await setDoc(doc(db, 'crm_users', uid), data); }
    catch(e) { console.error(e); }
  };
  window.loadAllUsers = async () => {
    // We store a list of all user UIDs in crm/userlist
    try {
      const snap = await getDoc(doc(db, 'crm', 'userlist'));
      if (snap.exists()) return snap.data().users || [];
    } catch(e) {}
    return [];
  };
  window.saveAllUsers = async (users) => {
    try { await setDoc(doc(db, 'crm', 'userlist'), { users }); }
    catch(e) {}
  };
  // ── Per-user notifications in Firestore ──────────────────────────────────
  window.sendFirebaseNotif = async (targetUid, notif) => {
    try {
      const snap = await getDoc(doc(db, 'crm_notifs', targetUid));
      const existing = snap.exists() ? (snap.data().notifs || []) : [];
      existing.unshift(notif);
      await setDoc(doc(db, 'crm_notifs', targetUid), { notifs: existing.slice(0, 100) });
    } catch(e) { console.error('sendFirebaseNotif error:', e); }
  };
  window.loadFirebaseNotifs = async (uid) => {
    try {
      const snap = await getDoc(doc(db, 'crm_notifs', uid));
      if (snap.exists()) return snap.data().notifs || [];
    } catch(e) {}
    return [];
  };
  window.clearFirebaseNotifs = async (uid) => {
    try { await setDoc(doc(db, 'crm_notifs', uid), { notifs: [] }); } catch(e) {}
  };

  window.loadPreCad = async () => {
    try {
      const snap = await getDoc(doc(db, 'crm', 'precad'));
      if (snap.exists()) return snap.data().list || [];
    } catch(e) {}
    return [];
  };
  window.savePreCad = async (list) => {
    try { await setDoc(doc(db, 'crm', 'precad'), { list }); }
    catch(e) {}
  };

  // ── Auth state observer ───────────────────────────────────────────────────
  const SENHA_ACESSO = 'Amanda&PalomaCRM2026@';

  onAuthStateChanged(auth, async (user) => {
    if (!user) { showLoginScreen(); return; }

    // Check if email is in pre-cad list OR already registered
    const allUsers = await window.loadAllUsers();
    const jaRegistrado = allUsers.find(u => u.email.toLowerCase() === user.email.toLowerCase());
    const preCadList = await window.loadPreCad();
    const preCad = preCadList.find(p => p.email.toLowerCase() === user.email.toLowerCase());
    const isFirst = allUsers.length === 0;

    // Emails que sempre têm acesso (proprietárias do sistema)
    const SUPER_ADMINS = ['digitalcreateagency@gmail.com'];
    const isSuperAdmin = SUPER_ADMINS.some(e => e.toLowerCase() === user.email.toLowerCase());

    // Block if not first user, not registered, not pre-cad, and not super admin
    if (!isFirst && !jaRegistrado && !preCad && !isSuperAdmin) {
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('senha-screen').style.display = 'none';
      document.getElementById('app-root').style.display = 'none';
      await auth.signOut();
      showLoginScreen();
      setTimeout(() => alert('❌ Acesso negado. Seu e-mail não está autorizado.\nFale com o administrador.'), 100);
      return;
    }

    // Show password screen
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('senha-screen').style.display = 'flex';
    document.getElementById('senha-input').value = '';
    document.getElementById('senha-input').focus();

    window._pendingUser = user;
    window._pendingIsFirst = isFirst;
    window._pendingJaRegistrado = jaRegistrado;
    window._pendingPreCad = preCad;
    window._pendingAllUsers = allUsers;
    window._pendingIsSuperAdmin = isSuperAdmin;
  });

  window.verificarSenha = async () => {
    const val = document.getElementById('senha-input').value;
    if (val !== SENHA_ACESSO) {
      document.getElementById('senha-sub').textContent = '❌ Senha incorreta. Tente novamente.';
      document.getElementById('senha-input').value = '';
      document.getElementById('senha-input').focus();
      return;
    }

    // Senha correta — prosseguir com login
    const user = window._pendingUser;
    const isFirst = window._pendingIsFirst;
    const jaRegistrado = window._pendingJaRegistrado;
    const preCad = window._pendingPreCad;
    const allUsers = window._pendingAllUsers;

    let userData = await window.loadUserRole(user.uid);

    if (!userData) {
      userData = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: preCad ? preCad.role : (isFirst || window._pendingIsSuperAdmin ? 'admin' : 'membro')
      };
      if (preCad) {
        const newList = (await window.loadPreCad()).filter(p => p.email.toLowerCase() !== user.email.toLowerCase());
        await window.savePreCad(newList);
      }
      await window.saveUserRole(user.uid, userData);
      allUsers.push({ uid: user.uid, name: user.displayName, email: user.email, photo: user.photoURL, role: userData.role });
      await window.saveAllUsers(allUsers);
    } else {
      userData.name = user.displayName;
      userData.photo = user.photoURL;
    }

    window.currentUser = userData;
    window.currentRole = userData.role;

    document.getElementById('senha-screen').style.display = 'none';
    document.getElementById('app-root').style.display = 'flex';

    const av = document.getElementById('sidebar-user-photo');
    const nm = document.getElementById('sidebar-user-name');
    const rl = document.getElementById('sidebar-user-role');
    if (av) { av.src = userData.photo || ''; av.style.display = userData.photo ? 'block' : 'none'; }
    if (nm) nm.textContent = userData.name;
    if (rl) rl.textContent = { admin: '👑 Admin', gerente: '⭐ Gerente', membro: '👤 Membro' }[userData.role] || userData.role;

    const navSettings = await window.loadNavSettings();
    window._navSettings = navSettings;
    applyRoleRestrictions(userData.role, navSettings);
    window._firebaseReady = true;
    window.dispatchEvent(new Event('firebase-ready'));
    // Disparar evento para novos módulos CRM
    setTimeout(() => document.dispatchEvent(new Event('crm-ready')), 500);
  };

  function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('senha-screen').style.display = 'none';
    document.getElementById('app-root').style.display = 'none';
  }

  // ── Briefings ─────────────────────────────────────────────────────────────
  window.saveBriefing = async (data) => {
    try {
      await addDoc(collection(db, 'crm_briefings'), { ...data, submittedAt: new Date().toISOString() });
      return true;
    } catch(e) { console.error('saveBriefing error:', e); return false; }
  };
  window.loadBriefings = async () => {
    try {
      const q = query(collection(db, 'crm_briefings'), orderBy('submittedAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { console.error('loadBriefings error:', e); return []; }
  };
  window.deleteBriefing = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_briefings', id));
      return true;
    } catch(e) { return false; }
  };

  // ── Real-time listeners (onSnapshot) ─────────────────────────────────────
  // Briefings: chama callback sempre que um novo formulário for submetido
  window.subscribeBriefings = (formType, callback) => {
    const q = query(collection(db, 'crm_briefings'), orderBy('submittedAt', 'desc'));
    return onSnapshot(q, (snap) => {
      const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      const filtered = formType ? all.filter(b => (b.type || 'trafego') === formType) : all;
      callback(filtered);
    }, (err) => {
      console.error('subscribeBriefings error:', err);
      callback([]);
    });
  };

  // CRM principal: sincroniza dados entre usuários em tempo real
  window.subscribeMainData = (callback) => {
    return onSnapshot(doc(db, 'crm', 'data'), (snap) => {
      if (snap.exists()) callback(snap.data());
    }, (err) => { console.error('subscribeMainData error:', err); });
  };

  // Notificações: substitui polling por listener instantâneo
  window.subscribeNotifications = (uid, callback) => {
    return onSnapshot(doc(db, 'crm_notifs', uid), (snap) => {
      const notifs = snap.exists() ? (snap.data().notifs || []) : [];
      callback(notifs);
    }, (err) => { console.error('subscribeNotifications error:', err); callback([]); });
  };

  window.doSignOut = window.doLogout; // alias used in HTML

  // ── Form Config (custom questions per form type) ──────────────────────────
  // ── CRM Documents ────────────────────────────────────────────────────────
  window.saveCrmDoc = async (data) => {
    try {
      if (data.id) {
        await setDoc(doc(db, 'crm_docs', data.id), { ...data, updatedAt: new Date().toISOString() });
        return data.id;
      } else {
        const ref = await addDoc(collection(db, 'crm_docs'), { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        return ref.id;
      }
    } catch(e) { console.error('saveCrmDoc:', e); return null; }
  };
  window.loadCrmDocs = async () => {
    try {
      const q = query(collection(db, 'crm_docs'), orderBy('updatedAt', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { console.error('loadCrmDocs:', e); return []; }
  };
  window.deleteCrmDoc = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_docs', id));
      return true;
    } catch(e) { return false; }
  };

  // ── Document Folders ────────────────────────────────────────────────────────
  window.loadDocFolders = async () => {
    try {
      const snap = await getDoc(doc(db, 'crm', 'doc_folders'));
      if (snap.exists()) return snap.data().folders || [];
    } catch(e) {}
    return [];
  };
  window.saveDocFolders = async (folders) => {
    try { await setDoc(doc(db, 'crm', 'doc_folders'), { folders }); return true; }
    catch(e) { console.error('saveDocFolders:', e); return false; }
  };

  window.loadNavSettings = async () => {
    try {
      const snap = await getDoc(doc(db, 'crm', 'nav_settings'));
      if (snap.exists()) return snap.data().settings || {};
    } catch(e) {}
    return {};
  };
  window.saveNavSettings = async (settings) => {
    try { await setDoc(doc(db, 'crm', 'nav_settings'), { settings }); return true; }
    catch(e) { console.error('saveNavSettings:', e); return false; }
  };

  window.loadFormConfig = async (formType) => {
    try {
      const snap = await getDoc(doc(db, 'crm_form_config', formType));
      if (snap.exists()) return snap.data().questions || [];
    } catch(e) { console.error('loadFormConfig:', e); }
    return [];
  };
  window.saveFormConfig = async (formType, questions) => {
    try {
      await setDoc(doc(db, 'crm_form_config', formType), { questions });
      return true;
    } catch(e) { console.error('saveFormConfig:', e); return false; }
  };

  const _NAV_KEYS = ['dashboard','crm','jornada','lembretes','clients','financeiro','prospeccao','docs','files','custom-forms','briefings-trafego','briefings-gmb','briefings-contrato','briefings-satisfacao','briefings-sites','ia','contratos-ia','drive'];
  const _NAV_DEFAULTS = {
    financeiro: { gerente: true,  membro: false },
    drive:      { gerente: false, membro: false },
  };

  function applyRoleRestrictions(role, navSettings) {
    const s = navSettings || window._navSettings || {};
    const canTeam = role === 'admin';

    if (role !== 'admin') {
      _NAV_KEYS.forEach(key => {
        const def = _NAV_DEFAULTS[key] ?? { gerente: true, membro: true };
        const setting = s[key] ?? def;
        const show = role === 'gerente'
          ? (setting.gerente ?? def.gerente ?? true)
          : (setting.membro  ?? def.membro  ?? true);
        const el = document.getElementById('nav-' + key);
        if (el) el.style.display = show ? '' : 'none';
      });
      // Configurações sempre ocultas para não-admins
      const settingsSection = document.getElementById('nav-section-settings');
      if (settingsSection) settingsSection.style.display = 'none';
    }

    // Equipe / integrações: admin only via classe nav-team
    document.querySelectorAll('.nav-team').forEach(el => el.style.display = canTeam ? '' : 'none');

    // Mobile bottom nav — Financeiro
    const finDef = _NAV_DEFAULTS.financeiro;
    const finS   = s.financeiro ?? finDef;
    const canFinanceiro = role === 'admin'
      || (role === 'gerente' ? (finS.gerente ?? finDef.gerente) : (finS.membro ?? finDef.membro));
    const mobFin = document.getElementById('mob-financeiro');
    if (mobFin) mobFin.style.display = canFinanceiro ? '' : 'none';

    window._canDelete     = role === 'admin' || role === 'gerente';
    window._canFinanceiro = canFinanceiro;
    window._canTeam       = canTeam;
  }
  window.applyRoleRestrictions = applyRoleRestrictions;

  // ── Calendário Semanal ────────────────────────────────────────────────────
  window.saveCalTask = async (data) => {
    try {
      const ref = await addDoc(collection(db, 'crm_jornada_cal'), { ...data, createdAt: new Date().toISOString() });
      return ref.id;
    } catch(e) { console.error('saveCalTask:', e); throw e; }
  };
  window.loadCalTasks = async () => {
    try {
      const snap = await getDocs(collection(db, 'crm_jornada_cal'));
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { console.error('loadCalTasks:', e); return []; }
  };
  window.updateCalTask = async (id, updates) => {
    try {
      const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await updateDoc(doc(db, 'crm_jornada_cal', id), updates);
    } catch(e) { console.error('updateCalTask:', e); throw e; }
  };
  window.deleteCalTask = async (id) => {
    try {
      const { deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await deleteDoc(doc(db, 'crm_jornada_cal', id));
    } catch(e) { console.error('deleteCalTask:', e); throw e; }
  };
