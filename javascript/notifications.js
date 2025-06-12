const notifications = [
    { title: 'New Gift Alert', message: 'Check out our latest personalized gift ideas for birthdays!', datetime: '09:00 AM' },
    { title: 'Gift Tip', message: 'Remember to add a handwritten note for a personal touch.', datetime: '10:30 AM' },
    { title: 'Event Reminder', message: 'Join our Gift Wrapping Webinar this Saturday at 3 PM.', datetime: '11:00 AM' },
    { title: 'Offer Alert', message: 'Get 15% off on all anniversary gifts. Limited time only!', datetime: '11:30 AM' },
    { title: 'Gift of the Day', message: 'Explore our featured holiday gift baskets for this season.', datetime: '01:00 PM' },
    { title: 'Suggestion', message: 'Don’t forget to browse eco-friendly gifts for sustainable celebrations.', datetime: '02:30 PM' },
    { title: 'Exclusive Offer', message: 'Order today and get free gift wrapping on all purchases!', datetime: '03:00 PM' },
    { title: 'Upcoming Workshop', message: 'Register for our DIY Handmade Gifts class this weekend.', datetime: '04:00 PM' },
    { title: 'Fun Fact', message: 'Did you know? Personalized gifts strengthen emotional bonds.', datetime: '05:00 PM' },
    { title: 'Gifting Tip', message: 'Plan ahead to avoid last-minute rush and ensure timely delivery.', datetime: '06:00 PM' }
];

const notificationContainer = document.querySelector('.notification-container');
let notificationIndex = 0;


function showNotification(notification) {
  const alertMessage = document.querySelector('.alert');
  if (alertMessage) {
    alertMessage.remove();
  }

  const notificationDiv = document.createElement('div');
  notificationDiv.className = 'notification d-flex justify-content-between align-items-center p-3 mb-3 border rounded';
  notificationDiv.innerHTML = `
    <div>
      <strong>${notification.title}</strong>
      <p class="mb-1">${notification.message}</p>
      <small>${notification.datetime || ''}</small>
    </div>
    <button class="delete-btn btn btn-danger btn-sm">
      <i class="fa-solid fa-trash"></i>
    </button>
  `;

  notificationDiv.querySelector('.delete-btn').addEventListener('click', () => {
    notificationDiv.classList.add('zoom-out');
    setTimeout(() => notificationDiv.remove(), 300);
  });

  notificationContainer.appendChild(notificationDiv);
}

// Function to generate notifications at intervals
function generateNotifications() {
  if (notificationIndex < notifications.length) {
    showNotification(notifications[notificationIndex]);
    notificationIndex++;
  } else {
    clearInterval(notificationInterval); // Stop generating notifications when all are displayed
  }
}

// Start generating notifications
const notificationInterval = setInterval(generateNotifications, 3000); // Show a new notification every 3 seconds

// Clear all notifications
document.getElementById('clear-all-btn').addEventListener('click', () => {
  notificationContainer.innerHTML = `
    <div class="alert alert-info text-center" role="alert">
      No new notifications at the moment.
    </div>
  `; // Reset the container with the "No new notifications" message
  clearInterval(notificationInterval); // Stop generating new notifications
});