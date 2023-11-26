import './styles-components.css';
import { Link } from 'react-router-dom';

export function HomeLink() {
    return (
        <Link to="/" className="heading-words">Home</Link>
    );
}

export function AboutUsLink() {
    return (
        <Link to="/about-us" className="heading-words">About Us</Link>
    );
}

export function SupportLink() {
    return (
        <Link to="/support" className="heading-words">Support</Link>
    );
}

export function CloseSession(isAuthenticated){
    isAuthenticated=false;
    return <Link to="/" className="heading-words">Log out</Link>
}

export function EntryLink() {
    return (
        <Link to="/entry" className="heading-words">Login / Register</Link>
    );
}

export function RegisterLink() {
    return (
        <Link to="/register" className="heading-words-2">Register</Link>
    );
}

export function BasicInformationLink() {
    return (
        <Link to="/basic-information">Basic Information</Link>
    );
}

export function LegalInformationLink() {
    return (
        <Link to="/legal-information">Legal Information</Link>
    );
}

export function EducationalInformationLink() {
    return (
        <Link to="/educational-information">Educational Information</Link>
    );
}

export function HealthInformationLink() {
    return (
        <Link to="/health-information">Health Information</Link>
    );
}

export function TransportInformationLink() {
    return (
        <Link to="/transport-information">Transport Information</Link>
    );
}
