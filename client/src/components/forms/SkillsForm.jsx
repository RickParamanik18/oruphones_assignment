"use client";
import Modal from "antd/es/modal/Modal";
import React from "react";

const SkillsForm = (props) => {
    const { open, onCancel,title } = props;
    return (
        <Modal open={open} title={title} footer={null} onCancel={onCancel}>
            
        </Modal>
    );
};

export default SkillsForm;
