        // Устанавливаем даты по умолчанию
        document.getElementById('submission_date').valueAsDate = new Date();
        
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 3);
        document.getElementById('delivery_date').valueAsDate = deliveryDate;