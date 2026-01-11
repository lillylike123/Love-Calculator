const form = document.getElementById('calculatorForm');
const resultContainer = document.getElementById('resultContainer');
const loadingContainer = document.getElementById('loadingContainer');
const errorContainer = document.getElementById('errorContainer');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    if (!name1 || !name2) {
        showError('Please enter both names!');
        return;
    }
    
    if (name1.length < 2 || name2.length < 2) {
        showError('Names must be at least 2 characters long!');
        return;
    }
    
    // Show loading state
    form.classList.add('hidden');
    resultContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
    loadingContainer.classList.remove('hidden');
    
    try {
        const response = await fetch('/api/calculate-love', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name1: name1,
                name2: name2
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to calculate love percentage');
        }
        
        const data = await response.json();
        
        // Simulate a slight delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));
        
        displayResult(data);
        
    } catch (error) {
        console.error('Error:', error);
        showError('An error occurred. Please try again!');
    } finally {
        loadingContainer.classList.add('hidden');
    }
});

function displayResult(data) {
    const { percentage, message, description } = data;
    
    // Animate percentage counting up
    animatePercentage(0, percentage);
    
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultDescription').textContent = description;
    
    resultContainer.classList.remove('hidden');
}

function animatePercentage(start, end) {
    const duration = 1500;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        
        document.getElementById('percentageValue').textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

function showError(message) {
    loadingContainer.classList.add('hidden');
    form.classList.remove('hidden');
    document.getElementById('errorMessage').textContent = message;
    errorContainer.classList.remove('hidden');
}

function hideError() {
    errorContainer.classList.add('hidden');
}

function resetForm() {
    form.reset();
    resultContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
    form.classList.remove('hidden');
    document.getElementById('name1').focus();
}
