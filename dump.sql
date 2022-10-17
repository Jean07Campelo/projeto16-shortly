--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token character varying(100) NOT NULL,
    "createdAt" character varying(20) NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    visits integer DEFAULT 0,
    "createdAt" character varying(20) NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    "passwordHash" text NOT NULL,
    "createdAt" text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 3, '71927043-80c8-4848-a9be-35309a0c5d9c', '2022-10-12 21:16');
INSERT INTO public.sessions VALUES (2, 3, '301fa23d-c814-4732-ae65-9ce2c22e41c6', '2022-10-12 21:25');
INSERT INTO public.sessions VALUES (3, 3, '4f51b64a-5b93-4d95-8cef-bf55c5cab6c4', '2022-10-12 21:26');
INSERT INTO public.sessions VALUES (4, 3, '7a34147d-9dc6-49fe-8079-31528f773683', '2022-10-13 09:19');
INSERT INTO public.sessions VALUES (5, 3, 'db842d5f-95ba-400d-8ecb-dcf3d6b34c9e', '2022-10-13 09:21');
INSERT INTO public.sessions VALUES (7, 4, 'fc6650eb-999b-4145-903c-4c4591b918c4', '2022-10-14 08:40');
INSERT INTO public.sessions VALUES (8, 5, '0dcae7bf-cf5b-4c61-80c7-f31b951c2bbf', '2022-10-14 08:41');
INSERT INTO public.sessions VALUES (9, 6, 'abbbf4a5-f26d-411c-af7f-f254960f5d70', '2022-10-14 15:13');
INSERT INTO public.sessions VALUES (10, 6, '956a65df-ee9d-4958-b518-4b8f58f3d9a6', '2022-10-14 15:32');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (11, 3, 'https://term.ooo/', 'TrIJQUVDdtgFmU8Ufjumm', 0, '2022-10-14 08:59');
INSERT INTO public.urls VALUES (12, 3, 'https://siteFeio.com', '4aak4n5TSkKEFsDZG5VMh', 0, '2022-10-14 15:14');
INSERT INTO public.urls VALUES (1, 3, 'https://www.trello.com/', 'q2AnQnsk2z8OMKBPTVgqD', 3, '2022-10-13 14:04');
INSERT INTO public.urls VALUES (14, 6, 'https://siteTrevoso.com', 'fn9tuP3o8JtF_mLhDU2wc', 0, '2022-10-14 15:18');
INSERT INTO public.urls VALUES (5, 3, 'https://www.spotify.com', 'TfNV4YCB8DEsnTyiddCBr', 2, '2022-10-14 08:34');
INSERT INTO public.urls VALUES (6, 3, 'https://www.google.com', '4MztZ_RnbMSA2dNeTuH5C', 5, '2022-10-14 08:34');
INSERT INTO public.urls VALUES (7, 3, 'https://www.respondeai.com.br', 'PWA3ehWrvcKuhDtEEfrko', 11, '2022-10-14 08:35');
INSERT INTO public.urls VALUES (8, 4, 'https://www.amazon.com.br', '-DNQlBkyHDVQbJqV5dtTU', 4, '2022-10-14 08:43');
INSERT INTO public.urls VALUES (9, 4, 'https://www.lenovo.com.br', 'BckuJuWwSJ6gwYV0ZtauZ', 7, '2022-10-14 08:44');
INSERT INTO public.urls VALUES (10, 5, 'https://www.lego.com.br', 'EyxgjBpYGMosUGHkZMfxW', 15, '2022-10-14 08:46');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (3, 'Mutano', 'mutano@titans.com', '$2b$10$B/Pixhm5jazgjgZDHkeieONNsXD0Sg2mm7bittiaYtb/VM3F7c5Fe', '2022-10-12 19:08');
INSERT INTO public.users VALUES (4, 'Estelar', 'estelar@titans.com', '$2b$10$7tnCP8Mu/yHnxDdmY67jye4Q2YtGmy5RsUEEuGF1A3LqxFBMrA0ui', '2022-10-14 08:32');
INSERT INTO public.users VALUES (5, 'Robin', 'prodigio@titans.com', '$2b$10$kpMd8WipV3/s3cvnOv70r.OnTQ.t2Ng4vD328Vp.Ymhc.jrA6NSlm', '2022-10-14 08:32');
INSERT INTO public.users VALUES (6, 'Ravena', 'ravena@titans.com', '$2b$10$CpdPdfOQO1oYEl9rA9GvQuIG4WC7csymC8WVfdeta6ZxziM/NJI9C', '2022-10-14 15:13');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 10, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: urls urls_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_url_key UNIQUE (url);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_passwordHash_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_passwordHash_key" UNIQUE ("passwordHash");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

