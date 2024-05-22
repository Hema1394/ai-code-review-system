import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';

function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [user, setUser] = useState({ name: '', rollNumber: '', department: '' });

  useEffect(() => {
    // Fetch user details and documents
    const fetchUserDetails = async () => {
      try {
        const token = local
