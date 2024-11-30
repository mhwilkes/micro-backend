'use client'

import React, {useState} from 'react';
import Card from "@/app/components/Card";
import TextInput from "@/app/components/TextInput";
import Button from "@/app/components/Button";
import Modal from "@/app/components/ModalComponent";

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Sales" content="Analyze your sales data with this dashboard."/>
                <Card title="Traffic" content="Monitor your site's traffic statistics."/>
                <Card title="User Stats" content="View detailed user activity reports."/>
            </div>
            <div className="mt-6">
                <TextInput label="Search" placeholder="Type to search..."/>
                <div className="mt-4">
                    <Button label="Open Modal" onClick={() => setModalOpen(true)}/>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                title="Information"
                content="This is a sample modal to showcase additional information."
                onClose={() => setModalOpen(false)}
            />
        </>

    )
}

export default Home;